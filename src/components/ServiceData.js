import { graphql, useStaticQuery } from 'gatsby'

export const useServiceData = () => {
  const { allServicesJson } = useStaticQuery(
    graphql`
    {
      allServicesJson {
        nodes {
          id
          title     
          info {
            text
            title
          }
          price
          slug
          time
          url
          category
        }
      }
    } 
    `
  )
  return allServicesJson.nodes
}
