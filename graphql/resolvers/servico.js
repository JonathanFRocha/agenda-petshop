const Operations = require('../../infraestrutura/operations')
const Servico = new Operations('servico');

const resolvers = {
  Mutation: {
    adicionarServico:(root, params) => Servico.adiciona(params),
    atualizaServico:(root, params) => Servico.atualiza(params),
    deletaServico:(root, {id}) => Servico.deleta(id)
  },
  Query: {
    servicos: () => Servico.lista(),
    servico: (root, {id}) => Servico.lista(id)
  }

}

module.exports = resolvers;