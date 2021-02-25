import React,{ useState } from 'react'
import { Helmet } from 'react-helmet'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import {  graphql } from 'gatsby'
import { useTheme  } from '@emotion/react'
import {Layout, Video, BokaButton, Navbar} from '../components'
import {Wrapper, Header, VideoContainer, Body, Close, Footer, ListHeader, ListContent} from './styles/Styled.servicemodal'


const ServiceModal = ({data}) => { 
    const [expanded, setExpanded] = useState({title:"", height: 300});
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
             
                <Header>
                    <h1>
                        {title}                            
                    </h1>    
                    <Close to={closeTo}/>        
                </Header>
                <VideoContainer>
                    <Video title="test" url={"https://www.youtube.com/embed/jY9JI4nHCpE"} />     
                </VideoContainer>
                <Body h={50 + info.length *40 + ((expanded.height/50) * 20)}>                                                                                              
                        {info &&
                        info.map(({title, text}) => {
                            const isExpanded = expanded.title === title
                            
                            return(
                                <React.Fragment>
                                    <ListHeader dangerouslySetInnerHTML={{__html: title}} key={title} isExpanded={isExpanded} onClick={() => {setExpanded(isExpanded ? {title: "", height: 300} : {title: title, height: text.length})}}/>            
                                    <ListContent isExpanded={isExpanded} dangerouslySetInnerHTML={{__html: text}}/>
                                </React.Fragment>
                               
                        
                        )})          
                        }                                                                                                                                     
                </Body>   
                <Footer>
                    <BokaButton url={details.url}/>
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