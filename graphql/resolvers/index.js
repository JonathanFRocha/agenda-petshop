const path = require('path');
const mergeGraphQLSchemas = require('merge-graphql-schemas');

const {
  fileLoader
} = mergeGraphQLSchemas

const arquivos = path.join(__dirname, './');

const arquivosCarregados = fileLoader(arquivos)

module.exports = arquivosCarregados;




// const cliente = require('./cliente')
// const pet = require('./pet')

// const querys = { Query: {...pet.Query, ...cliente.Query } }
// const mutations = { Mutation: {...pet.Mutation, ...cliente.Mutation } }


// module.exports = {
//     ...querys,
//     ...mutations
// }