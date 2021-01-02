import { graphql, useStaticQuery } from 'gatsby'

export const useCategoryData = () => {
  const { dataJson } = useStaticQuery(
    graphql`
    {
        dataJson {
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
  return dataJson.categories
}
