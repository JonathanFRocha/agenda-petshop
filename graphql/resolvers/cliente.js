const Operations = require('../../infraestrutura/operations')
const Clientes = new Operations('cliente')

const resolvers = {
  Query: {
    clientes: () => Clientes.lista(),
    cliente: (root, {id}) => Clientes.buscaPorId(id)
  },
  Mutation: {
    adicionarCliente: (root, params) => Clientes.adiciona(params),
    atualizaCliente: (root, params) => Clientes.atualiza(params), 
    deletaCliente: (root, {id}) => Clientes.deleta(id)
  }
}

module.exports = resolvers