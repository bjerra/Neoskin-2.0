import React from 'react'
import { Helmet } from 'react-helmet'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import {  graphql } from 'gatsby'
import ServiceDetails from '../components/ServiceDetails'
import {Layout, Video} from '../components'
import {Wrapper, Body, Close} from './styles/Styled.servicemodal'

const ServiceModal = ({data}) => { 

    const {info, title, ...details} = data.serviceDataJson
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
        
                <Body>                  
                    <Close to={closeTo} /> 
                    <h1>
                        {title}                            
                    </h1>         
                    <Video title="test" url={"https://www.youtube.com/embed/jY9JI4nHCpE"} />        
                    <div>                                                                         
                        {info &&
                        info.map(({title, text}) => (
                            <div key={title}>
                                <h2 dangerouslySetInnerHTML={{__html: title}}/>
    
                                <div dangerouslySetInnerHTML={{__html: text}}/>
    
                            </div>
                        ))          
                        }                                                                                                         
                    </div>   
                    <div>
                    <ServiceDetails service={details}/>     
                        </div>            
                                                            
                </Body>   
            </Wrapper>
        ) : (       
            <Layout>  
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
            <ServiceDetails service={details}/>  
           
           </div>   
           </Layout>       
        )

    )}
  </ModalRoutingContext.Consumer>
  
)}

export default ServiceModal

export const query = graphql`
  query($serviceId: String!) {
    serviceDataJson(id: {eq: $serviceId}) {
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