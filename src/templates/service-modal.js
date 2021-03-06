import React,{ useState } from 'react'
import { Helmet } from 'react-helmet'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import {  graphql } from 'gatsby'
import { useTheme  } from '@emotion/react'
import {Layout, Video, BokaButton, Navbar} from '../components'
import {Wrapper, Header, VideoContainer, Body, Close, Footer, ListHeader, ListContent, ListItem} from './styles/Styled.servicemodal'
import { MdExpandLess } from 'react-icons/md';

const ServiceModal = ({data}) => { 
    const [expanded, setExpanded] = useState("");
    const {info, title, ...details} = data.servicesJson
    const theme = useTheme()
    let description = ""
    if(info != null){
        info.forEach(element => {
            description += element.text
        });
    } 

    
    return(
  <ModalRoutingContext.Consumer>
    
    {({ modal, closeTo }) => (
        modal ? (
            <Wrapper>
                <Helmet titleTemplate={`%s | Behandlingar`}>
                        <title>{title}</title>
                        <meta
                        name="description"
                        content={description}
                        />
                </Helmet>    
                <VideoContainer>
                    <Video title="test" url={"https://www.youtube.com/embed/jY9JI4nHCpE"} />     
                </VideoContainer>
                <Header>
                    <h3>
                        {title}                            
                    </h3>    
                        
                </Header>
                <Body>                                                                                              
                        {info &&
                        info.map(({title, text}, index) => {
                            const isExpanded = expanded === title
                            
                            return(
                                <ListItem key={title} isExpanded={isExpanded} index={index} onClick={() => {setExpanded(isExpanded ?  "": title)}}>
                                 
                                    <ListHeader isExpanded={isExpanded}>
                                        <h4>{title}</h4>
                                        <MdExpandLess size={28}/>         
                                    </ListHeader>     
                                    <ListContent  dangerouslySetInnerHTML={{__html: text}} />
                                </ListItem>
                        )})          
                        }      

                <ListItem index={info.length} />                                                                                
                </Body>   
                <Footer index={info.length}>
                  
                    <Close to={closeTo}>Stäng</Close>   
                    <div>
                    <BokaButton url={details.url}/>
                    </div>
                </Footer >   
            </Wrapper>
        ) : (       
            <Layout>  
            <Navbar />
            <div className="container">  
            <Helmet titleTemplate={`%s | ${title}`}>
                        <title>{title}</title>
                        <meta
                        name="description"
                        content={description}
                        />
                    </Helmet>
        
            <h1>
                {title}                            
            </h1>                 
            <div className="info-card" >                                                                         
                {info &&
                 info.map(({title, text}) => (
                     <div key={title}>
                         <div className="content" style={{fontSize: '1.25rem', margin: '0', borderBottom: '1px solid black', textAlign: 'center'}} dangerouslySetInnerHTML={{__html: title}}/>

                          <div className="content" style={{fontSize: '1rem', paddingLeft: '2rem'}} dangerouslySetInnerHTML={{__html: text}}/>

                     </div>
                 ))          
                 }                                                                                                         
           </div>  
        
           
           </div>   
           </Layout>       
        )

    )}
  </ModalRoutingContext.Consumer>
  
)}

export default ServiceModal

export const query = graphql`
  query($id: String!) {
    servicesJson(id: {eq: $id}) {
        url
        title
        time
        slug
        price
        id
        info {
            text
            title
        }
    }   
  }
`