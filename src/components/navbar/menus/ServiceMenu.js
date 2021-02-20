import React from 'react';
import { Link } from 'gatsby'
import {useCategoryData} from '../../CategoryData'

const ServiceMenu = () => {

  const categories = useCategoryData();
  return (
    <React.Fragment>  
          {
            categories.map((category, index) => {   
                return(
              <div className="item" key={index}>
                <Link to={`/${category.slug}`}>
                    {category.title}
                </Link>
               </div>
            )})
          }       
    </React.Fragment>
  )
}



export default ServiceMenu;