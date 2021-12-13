import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby'

const Information = () => {

    const { allMarkdownRemark  } = useStaticQuery(
        graphql`
        {
            allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "info-page"}}}) {
                nodes {
                  frontmatter {
                    title
                    path
                  }
                  fields {
                    slug
                  }
                }
              }
        } 
        `
      )
      return (
        <React.Fragment>  
              {
                allMarkdownRemark.nodes.map((item, index) => { 
                    const {frontmatter, fields} = item;
                    return(
                  <div className="item" key={index}>
                    <Link to={`${fields.slug}`}>
                        {frontmatter.title}
                    </Link>
                   </div>
                )})
              }       
        </React.Fragment>
      )
}

export default Information;