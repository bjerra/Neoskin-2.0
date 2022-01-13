
const fs = require('fs')
import { isEqual } from 'lodash';
import YAML from 'yaml'
const { Octokit } = require("@octokit/core");
const octokit = new Octokit({ auth: process.env.GIT_KEY });
const cheerio = require('cheerio');
const _ = require('lodash/core');
const basicAuth = require('basic-auth')
const axios = require("axios").default;
var esprima = require('esprima');
const uppercaseletters = /[A-ZÅÄÖ\s]{5}/;  
const url = "https://www.bokadirekt.se/places/neoskin-39252";

export default async function handler(req, res) {
  
    try {      
      if (req.method !== `POST`) 
      res.status(500).send("...")
      const auth = basicAuth(req);
     
      if(auth.pass !== process.env.UPDATE_PASSWORD)
      res.status(401).send("Incorrect password")
      
     
      const html = await fetchHtml(url);
      const parsedData = await parseData(html);
      await UpdateRemote(parsedData)
      res.status(200).send("Uppdaterat!")

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

  const data = {categories:[], services:[]}

  const $ = cheerio.load(html,{ normalizeWhitespace: false, xmlMode: false, decodeEntities: true });
  const rawData = esprima.parseScript($('body > script:nth-child(3)').html())

  const categories = rawData.body[0].expression.right.properties[0].value.properties.find(p=>p.key.value == "services").value.elements;
  
  let id = 0;
  categories.forEach(category => {
    id+= 1;
    const categoryTitle = category.properties.find(property => property.key.value == "name").value.value;
    const slug = stringToSlug(categoryTitle);

    const categoryObject = {title:categoryTitle, id, description: "", image: "/img/default.jpg", slug, brandLogo: "/img/brand_Default.png", brandUrl: " "}
    data.categories.push(categoryObject)

    const services = category.properties.find(property => property.key.value == "services").value.elements;
    services.forEach(service => {

      const title = service.properties.find(property => property.key.value == "name").value.value;
      const price = service.properties.find(property => property.key.value == "price").value.value;
      const time = service.properties.find(property => property.key.value == "duration").value.value;
      const id = service.properties.find(property => property.key.value == "id").value.value;   
      const about = service.properties.find(property => property.key.value == "about").value.properties;
      const description = about.find(property => property.key.value == "description").value.value;
      const slug = about.find(property => property.key.value == "slug").value.value;

      const serviceObject = {
        id, 
        title, 
        price: parseInt(price), 
        time: parseInt(time), 
        slug: slug+ "-"+id, 
        category: categoryTitle, 
        info: description
      }

      data.services.push(serviceObject);
    })
  })

  return data;
}

const UpdateRemote = async (parsedData) => {

    //----------------------------------------    GIT STUFF  ----------------------------------------------

    const {categories, services} = parsedData
    const garbage = []
    const newCategoryData = []
    const remoteCategories= [] 


      const categoryDirectory = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner: 'bjerra',
        repo: 'Neoskin-2.0',
        path: 'src/pages/behandlingar'
      }) 

      for (const file of categoryDirectory.data) {
        remoteCategories.push(file.name)
        const title = file.name.slice(0, -3);
        if(!categories.find(p=>p.slug == title))
          garbage.push({path: file.path, sha: file.sha, title})
      }   

      for (const category of categories) {
          const title = category.slug + ".md"
        if(!remoteCategories.includes(title))
            newCategoryData.push({path: `src/pages/behandlingar/${title}`, data: category})     
       
      }

       //-------------UPDATE REMOTE-----------------------

       for (const item of garbage) {
        await octokit.request('DELETE /repos/{owner}/{repo}/contents/{path}', {
         owner: 'bjerra',
         repo: 'Neoskin-2.0',
         path: item.path,
         message: 'deleted categories',
         sha: item.sha
       })
     }

    for(const item of newCategoryData) {
        var string = "---\n" + YAML.stringify(item.data, null, 1) +"\n---";
        var buffer = Buffer.from(string).toString("base64")
      
        await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
          owner: 'bjerra',
          repo: 'Neoskin-2.0',
          path: item.path,
          message: 'updated categories',
          content: buffer,
          sha: ""
        }) 
    }

    //SERVICES UPDATE

    const serviceFile = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
      owner: 'bjerra',
      repo: 'Neoskin-2.0',
      path: 'src/data/services.yaml'
    }) 
    let remoteBuffer = Buffer.from(serviceFile.data.content, 'base64');
    
    var remoteObject = YAML.parse(remoteBuffer.toString())
  
    var equal = isEqual(services, remoteObject)

    if(!equal){
      var string = YAML.stringify(services, null, 1);
      var serviceBuffer = Buffer.from(string)
      await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
        owner: 'bjerra',
        repo: 'Neoskin-2.0',
        path: 'src/data/services.yaml',
        message: 'updated services',
        content: serviceBuffer.toString("base64"),
        sha: serviceFile.data.sha
      }) 
    }
 
}

const IsEqual = (arr1, arr2) =>{
  return JSON.stringify(arr1) == JSON.stringify(arr2)
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