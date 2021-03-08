import React,{ useState } from 'react'
import { Helmet } from 'react-helmet'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import {  graphql } from 'gatsby'
import {Layout, Video, BokaButton} from '../components'
import {Container, ModalContainer, Header, VideoContainer, Body, Close, Footer, ListHeader, ListContent, ListItem} from './styles/Styled.servicemodal'
import { MdExpandLess } from 'react-icons/md';

const ServiceModal = ({data}) => { 
    const [expanded, setExpanded] = useState("");
    const {info, title, ...details} = data.servicesJson
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
            <ModalContainer>
                <Helmet titleTemplate={`%s | Behandlingar`}>
                        <title>{title}</title>
                        <meta
                        name="description"
                        content={description}
                        />
                </Helmet>   
                <Header>
                    <h3>
                        {title}                            
                    </h3>    
                        
                </Header> 
                <VideoContainer>
                    <Video title="test" url={"https://www.youtube.com/embed/jY9JI4nHCpE"} />     
                </VideoContainer>
              
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
                  
                <div>
                    <Close to={closeTo}>Stäng</Close>   
                    </div>
                    <div>
                    <BokaButton url={details.url} size={'1.75rem'}/>
                    </div>
                </Footer >   
            </ModalContainer>
        ) : (       
            <Layout>  
                  <Container>
                <Helmet titleTemplate={`%s | Behandlingar`}>
                        <title>{title}</title>
                        <meta
                        name="description"
                        content={description}
                        />
                </Helmet>   
                <Header>
                    <h3>
                        {title}                            
                    </h3>    
                        
                </Header> 
                <VideoContainer>
                    <Video title="test" url={"https://www.youtube.com/embed/jY9JI4nHCpE"} />     
                </VideoContainer>
              
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
                    <div>
                    <BokaButton url={details.url} size={'1.75rem'}/>
                    </div>
                </Footer >   
            </Container>
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