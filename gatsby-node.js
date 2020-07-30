exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    }
  }
}

// exports.createPages = async ({ actions: { createPage } }) => {
//   const users = await getUsers()

//   createPage({
//     path: `/rolodex/`,
//     component: require.resolve("./src/templates/rolodex.js"),
//     context: { users },
//   })
// }
