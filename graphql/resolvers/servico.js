const Operations = require('../../infraestrutura/operations')
const Servico = new Operations('servico');

const resolvers = {
  Mutation: {
    adicionarServico:(root, params) => Servico.adiciona(params)
  }

}

module.exports = resolvers;