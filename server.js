const { GraphQLServer } = require('graphql-yoga')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/database/tabelas')
const Operations = require('./infraestrutura/operations')
const pet = require('./infraestrutura/crud/pet')



conexao.connect(erro => {
  if (erro) {
    console.log(erro)
  }

  console.log('conectou no banco')

  Tabelas.init(conexao)
})

const Clientes = new Operations('cliente');
const Pets = new Operations('pet')
const resolvers = {
  Query: {
    status: () => "servidor rodando!",
    clientes: () => Clientes.lista(),
    cliente: (root, {id}) => Clientes.buscaPorId(id),
    pets: () => Pets.lista(),
    pet: (root, { id }) => Pets.buscaPorId(id)
  },
  Mutation: {
    adicionarCliente: (root, params) => Clientes.adiciona(params),
    atualizaCliente: (root, params) => Clientes.atualiza(params), 
    deletaCliente: (root, {id}) => Clientes.deleta(id),
    adicionarPet: (root, params) => Pets.adiciona(params),
    atualizaPet: (root, params) => Pets.atualiza(params),
    deletaPet: (root, {id}) => Pets.deleta(id)
  }
}


const server = new GraphQLServer({
  resolvers,
  typeDefs: './schema.graphql'
})

server.start(() => console.log('servidor ouvindo!'))


