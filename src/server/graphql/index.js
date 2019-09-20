const userResolver = require("./Users/resolver")
const exerciseResolver = require("./Exercises/resolver")
const roleResolver = require("./Role/resolver")
const { resolverMap } = require("./commonResolver")
const { ApolloServer } = require("apollo-server-express")
const { merge } = require("lodash")

// tslint:disable-next-line:no-var-requires
const commonTypeDef = require("./commonSchema.gql")
const userTypeDef = require("./Users/schema.gql")
const exerciseTypeDef = require("./Exercises/schema.gql")
const roleTypeDef = require("./Role/schema.gql")

const userMutations = require("./Users/mutations")
const exerciseMutations = require("./Exercises/mutations")
const roleMutations = require("./Role/mutations")

const queries = merge(userResolver, exerciseResolver, roleResolver, resolverMap)
const mutations = merge(userMutations, exerciseMutations, roleMutations)
const resolvers = merge(queries, mutations)
const context = request => {
  const userId = request.req.userId
  const username = request.req.username

  return { request, userId, username }
}

const apolloServer = new ApolloServer({
  context,
  resolvers,
  typeDefs: [commonTypeDef, userTypeDef, exerciseTypeDef, roleTypeDef]
})

module.exports = { apolloServer }