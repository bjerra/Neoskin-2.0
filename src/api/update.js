
//const { Octokit } = require("@octokit/core");
import { Octokit } from "@octokit/core";
const cheerio = require('cheerio');
const axios = require("axios").default;
var esprima = require('esprima');
const uppercaseletters = /[A-ZÅÄÖ\s]{5}/;  

export default async function postNewPersonHandler(req, res) {
 
  try {
    const result = await Update()
    
    res.json(result)
  } catch (error) {
    res.status(500).send(error)
  }
}

const fetchHtml = async url => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch {
    console.error(
      `ERROR: An error occurred while trying to fetch the URL: ${url}`
    );
  }
};

const parseData = async html => {

  const data = [];

  const $ = cheerio.load(html,{ normalizeWhitespace: false, xmlMode: false, decodeEntities: true });
  const rawData = esprima.parseScript($('body > script:nth-child(3)').html())
  const categories = rawData.body[0].expression.right.properties[0].value.properties.find(p=>p.key.value == "services").value.elements;

  let id = 0;
  categories.forEach(category => {
    id+= 1;
    const categoryTitle = category.properties.find(property => property.key.value == "name").value.value;
    const slug = stringToSlug(categoryTitle);

    const categoryData = {title:categoryTitle, id, description: "", image: "/img/default.jpg", slug, services: []}

    const services = category.properties.find(property => property.key.value == "services").value.elements;
    services.forEach(service => {

      const title = service.properties.find(property => property.key.value == "name").value.value;
      const price = service.properties.find(property => property.key.value == "price").value.value;
      const time = service.properties.find(property => property.key.value == "duration").value.value;
      const id = service.properties.find(property => property.key.value == "id").value.value;
     
      const about = service.properties.find(property => property.key.value == "about").value.properties;

      const description = about.find(property => property.key.value == "description").value.value;

       let info = null;
       if(description != ""){
        info= [];
        const temp =description.split(/\r\n/);
       
        if(temp.length == 1){
          info = [{title: "", text: description}];
        } 
        else{
          temp.forEach(string => {  
            if(string != "") {
              const s = string.trim();
              const sub = s.substring(0, 5);
              if(sub.match(uppercaseletters)){
                info.push({title: s, text:[]});
              } else{
                if(info.length > 0)
                info[info.length - 1].text += s
                else
                info.push({title: "", text: s});
              }
            }
         
          })
        }
       }
      
      const slug = about.find(property => property.key.value == "slug").value.value;

      const serviceData = {id, title, price: parseInt(price), time: parseInt(time), slug: slug+ "-"+id, category: categoryTitle }
      if(info)
      serviceData.info = info;

      categoryData.services.push(serviceData);
    })
   
    data.push(categoryData)
  })

  return data;
}

const Update = async () => {

  const url =
    "https://www.bokadirekt.se/places/neoskin-jkpg-33692";
  const html = await fetchHtml(url);
  const parsedData = parseData(html);

    //----------------------------------------    GIT STUFF  ----------------------------------------------

    const octokit = new Octokit({ auth: process.env.GIT_KEY });

    await octokit.request('POST /repos/{owner}/{repo}/merges', {
      owner: 'bjerra',
      repo: 'Neoskin-2.0',
      base: 'Scrape',
      head: 'main'
    })

    const garbage = []
    const newData = []
    const remoteCategories= [] 

    const remoteFolder = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
      owner: 'bjerra',
      repo: 'Neoskin-2.0',
      path: 'src/data'
    })  


    if(remoteFolder.data.find(p=>p.name === 'categories')){
      const categoryDirectory = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner: 'bjerra',
        repo: 'Neoskin-2.0',
        path: 'src/data/categories'
      })  

      for (const file of categoryDirectory.data) {
        remoteCategories.push(file.name)
        const title = file.name.slice(0, -5);
        if(!parsedData.find(p=>p.slug == title))
          garbage.push({path: file.path, sha: file.sha, title})
      }   
    }

      for (const category of parsedData) {
          const title = category.slug + ".json"
        if(!remoteCategories.includes(title))
            newData.push({path: `src/data/categories/${title}`, data: category})     
       
      }

      //newData.push({path: `src/data/services.json`, data: parsedData.services})  
    
       //-------------UPDATE REMOTE-----------------------
      const didChange = newData.length !== 0 && garbage.length !== 0;
      if(!didChange) return false;

       for (const item of garbage) {
        await octokit.request('DELETE /repos/{owner}/{repo}/contents/{path}', {
         owner: 'bjerra',
         repo: 'Neoskin-2.0',
         path: item.path,
         branch: 'Scrape',
         message: 'deleted data',
         sha: item.sha
       })
     }

    for(const item of newData) {
        var buffer = Buffer.from(JSON.stringify(item.data, null, 1)).toString("base64")
      
        await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
          owner: 'bjerra',
          repo: 'Neoskin-2.0',
          path: item.path,
          branch: 'Scrape',
          message: 'updated data',
          content: buffer,
          sha: ""
        }) 
    }
   
    await octokit.request('POST /repos/{owner}/{repo}/merges', {
      owner: 'bjerra',
      repo: 'Neoskin-2.0',
      base: 'main',
      head: 'Scrape'
    })

    return true;
}


function stringToSlug (str) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  var from = "ÁÄÂÀÃÅĄČÇĆĎĘÉĚËÈÊẼĔȆĞÍÌÎÏİŃŇÑÓÖÒÔÕØŘŔŚŠŞŤÚŮÜÙÛÝŸŽŻŹąáäâàãåčçćďęéěëèêẽĕȇğíìîïıňñóöòôõøðřŕšşśťúůüùûýÿžżźþÞĐđßÆa·/_,:;";
var to   = "AAAAAAACCCDEEEEEEEEEGIIIIINNNOOOOOORRSSSTUUUUUYYZZZaaaaaaacccdeeeeeeeeegiiiiinnooooooorrssstuuuuuyyzzzbBDdBAa------";
  
  for (var i = 0, l = from.length ; i < l ; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid characters from string
         .replace(/\s+/g, '-') // collapse whitespace and replace by -
         .replace(/-+/g, '-'); // collapse dashes

  return str;
}