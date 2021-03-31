import React,{ useState } from 'react'
import { Helmet } from 'react-helmet'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing-3'
import {  graphql, navigate } from 'gatsby'
import { useTheme  } from '@emotion/react'
import {Layout, Video, BokaButton, Divider} from '../components'
import {Container, ModalContainer, Header, VideoContainer, Body, Close, Footer, ListHeader, ListContent, ListItem} from './styles/Styled.servicemodal'
import {AiOutlineCloseCircle} from 'react-icons/ai';
import { MdExpandLess } from 'react-icons/md';

const Content = ({service, theme}) => {

    const {info, title, slug, price, time} = service;
    const [expanded, setExpanded] = useState("");
    let description = ""
    return(
    <React.Fragment>
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
                {(info && info.length > 0 && info[0].title !== "") &&
                <ListItem index={info.length} />     
                }                                                 
                </Body>    
                <div style={{zIndex: '10'}}>     
                    <Divider fillColor={'#ddd'} fromColor={theme.COLOR.LIGHT.hex} toColor={theme.COLOR.LIGHT.hex} height={30} invert/>       
                </div>
                
                <Footer>     
                     
                    <div>
                        {`${time/60} minuter`}
                            <br></br>
                        {`${price} kr`}
                    </div>   
                    <div>
                    <BokaButton slug={slug} size={'1.75rem'}/>
                    </div>
                </Footer > 
    </React.Fragment>
)}

const ServiceModal = ({data}) => { 
   
    const service = data.servicesJson
    const theme= useTheme();
  
    return(
  <ModalRoutingContext.Consumer>
    
    {({ modal, closeTo }) => (
        modal ? (
            <ModalContainer theme={theme}>
                 <Content service={service} theme={theme}/>            
                 <Close onClick={() => navigate(-1)}><AiOutlineCloseCircle size={35}/> </Close>              
            </ModalContainer>
        ) : (       
            <Layout>  
                <Container theme={theme}>
                    <Content service={service} theme={theme}/>
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