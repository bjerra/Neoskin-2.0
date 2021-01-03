import { graphql, useStaticQuery } from 'gatsby'

export const useServiceData = () => {
  const { servicesJson } = useStaticQuery(
    graphql`
    {
      servicesJson {
          services{
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
  return servicesJson.services
}
