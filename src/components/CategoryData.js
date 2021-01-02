import { graphql, useStaticQuery } from 'gatsby'

export const useCategoryData = () => {
  const { categoriesJson } = useStaticQuery(
    graphql`
    {
      categoriesJson {
        categories {
            title
            slug
            description
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
    } 
    `
  )
  return categoriesJson.categories
}
