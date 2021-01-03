import { graphql, useStaticQuery } from 'gatsby'

export const useCategoryData = () => {
  const { allCategoriesJson } = useStaticQuery(
    graphql`
    {
      allCategoriesJson {
        nodes {
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
  return allCategoriesJson.nodes
}
