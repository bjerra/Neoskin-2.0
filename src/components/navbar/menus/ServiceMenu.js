import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby'

const ServiceMenu = () => {

  const { allCategoriesYaml  } = useStaticQuery(
    graphql`
    {
      allCategoriesYaml(sort: {fields: id}) {
        nodes {
          title
          slug
        }
      }
    } 
    `
  )
  return (
    <React.Fragment>  
          {
            allCategoriesYaml.nodes.map((category, index) => {   
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