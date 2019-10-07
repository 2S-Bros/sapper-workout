const userResolver = require("./Users/resolver")
const exerciseResolver = require("./Exercises/resolver")
const workoutResolver = require("./Workouts/resolver")
const roleResolver = require("./Role/resolver")
const { resolverMap } = require("./commonResolver")
const { ApolloServer } = require("apollo-server-express")
const { merge } = require("lodash")

// tslint:disable-next-line:no-var-requires
const commonTypeDef = require("./commonSchema.gql")
const userTypeDef = require("./Users/schema.gql")
const exerciseTypeDef = require("./Exercises/schema.gql")
const workoutTypeDef = require("./Workouts/schema.gql")
const roleTypeDef = require("./Role/schema.gql")

const userMutations = require("./Users/mutations")
const exerciseMutations = require("./Exercises/mutations")
const workoutMutations = require("./Workouts/mutations")
const roleMutations = require("./Role/mutations")

const queries = merge(
  userResolver,
  exerciseResolver,
  workoutResolver,
  roleResolver,
  resolverMap
)
const mutations = merge(
  userMutations,
  exerciseMutations,
  workoutMutations,
  roleMutations
)
const resolvers = merge(queries, mutations)
const context = request => {
  const userId = request.req.userId
  const username = request.req.username

  return { request, userId, username }
}

const apolloServer = new ApolloServer({
  context,
  resolvers,
  typeDefs: [
    commonTypeDef,
    userTypeDef,
    exerciseTypeDef,
    workoutTypeDef,
    roleTypeDef
  ]
})

module.exports = { apolloServer }
