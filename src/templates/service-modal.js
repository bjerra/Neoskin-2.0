import React,{ useState } from 'react'
import { Helmet } from 'react-helmet'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing-3'
import {  graphql } from 'gatsby'
import {Layout, Video, BokaButton} from '../components'
import {Container, ModalContainer, Header, VideoContainer, Body, Close, Footer, ListHeader, ListContent, ListItem} from './styles/Styled.servicemodal'
import { MdExpandLess } from 'react-icons/md';

const ServiceModal = ({data}) => { 
    const [expanded, setExpanded] = useState("");
    const {info, title, ...details} = data.servicesJson
    let description = ""
  

    
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

                            if(title === ""){
                                return(<ListContent>{text}</ListContent>)
                            }
                            const isExpanded = expanded === title
                            
                            return(
                                <ListItem key={title} isExpanded={isExpanded} index={index} onClick={() => {setExpanded(isExpanded ?  "": title)}}>
                                 
                                    <ListHeader isExpanded={isExpanded}>
                                        <h4>{title}</h4>
                                        <MdExpandLess size={28}/>         
                                    </ListHeader>     
                                    <ListContent>{text}</ListContent> 
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
                                    <ListContent>{text}</ListContent>
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
        title
        time
        slug
        price
        id
        image {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
              )
            }
          }  
        info {
            text
            title
        }
    }   
  }
`