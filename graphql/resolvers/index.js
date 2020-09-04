const cliente = require('./cliente')
const pet = require('./pet')

const querys = { Query: {...pet.Query, ...cliente.Query } }
const mutations = { Mutation: {...pet.Mutation, ...cliente.Mutation } }


module.exports = {
    ...querys,
    ...mutations
}