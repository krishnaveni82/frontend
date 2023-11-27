/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

//  const { default: ProductList } = require('./src/templates/ProductList')

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

exports.createPages = async({ graphql, actions}) => {

  const { createPage } = actions
  
  const result = await graphql(
        `{
          products: allStrapiProduct {
            edges {
              node {
                name
                strapiId
                id
                category{
                  name
                  pageName
                  description
                }
              }
            }
          }
          categories: allStrapiCategory {
            edges {
              node {
                strapiId
                name
                pageName
                description
                products{
									name
                  id
                }
              }
            }
          }
        }` 

  )

  if ( result.errors){
    throw result.errors
  }

  const products = result.data.products.edges
  const categories = result.data.categories.edges

 
  products.forEach(product => {
    createPage({
      path: `/${product.node.category.pageName}/${
        //product.node.pageName.split(" ")[0].toLowerCase()
        product.node.name
      }`,
      component: require.resolve("./src/templates/ProductDetail.js"),
        context: {
        name: product.node.name,
        id: product.node.id,
        // category: product.node.category.name,
        // description: product.node.description,
        // variants: product.node.variants,
          product: product,
          productId:product.node.id,

      },
    })
  })




  categories.forEach(category => {
    createPage({
      path: `/${category.node.pageName}`,
      component: require.resolve("./src/templates/ProductList.js"),
      context: {
        name: category.node.pageName,
        description: category.node.description,
        id: category.node.strapiId,
        productId: category.node.products.id,
        filterOptions: category.node.filterOptions,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({stage,loaders,actions}) => {

    if (stage === "build-html"){
      actions.setWebpackConfig({
        module:{
          rules:[{test: /react-spring-3d-carousel/, use: loaders.null()}],
          },
  })
  }
}
  


