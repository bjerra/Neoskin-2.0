import React from 'react'
import boka from '../img/bokadirekt.png'
import {BsStar} from 'react-icons/bs';

    const ServiceCard = ({service}) => {
    
    const {price, time, url, variant, offer} = service

    return(
            <div className="service-details">                                                                                             
                    {offer && 
                    <div className="container has-text-centered">                        
                        <span style={{margin: '1rem', fontSize: '1rem'}}>
                        ERBJUDANDE!
                        </span>                       
                            <BsStar />
                    </div>
                    }                              
                    <div className="columns" style={{display: 'flex',justifyContent: 'center', alignItems: 'center', marginBottom: '-.75rem', marginTop: '-1rem' }}> 
                    <div className="column">
                        <p className="service-text">
                            {time}
                        </p> 
                    </div>
                    <div className="column">                   
                        <p className="service-text">
                            {price}
                        </p> 
                    </div>
                    <div className="column">
                        <a href={url} target="_blank" rel="noopener noreferrer">    
                            Boka                                  
                        </a>
                    </div>                                                  
                    </div>   
                    <p className="variant-text">
                        {variant}
                    </p>                                                                                       
            </div>                          
    )
}

export default ServiceCard