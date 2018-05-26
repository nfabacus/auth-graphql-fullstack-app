const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLString
} = graphql

const UserType = require('./types/user_type')
const AuthService = require('../services/auth')

const mutation = new GraphQLObjectType({
  name: 'mutation',
    fields: {
      signup: {
        type: UserType,
        args: {
          email: { type: GraphQLString },
          password: { type: GraphQLString }
        },
        resolve(parentValue, { email, password }, req) {
          return AuthService.signup({ email, password, req }) //make sure to return it as it is a promise.
        }
      },
      logout: {
        type: UserType,
        resolve(parentValue, args, req) {
          const { user } = req //first save the user, then logout. This way, we can return user data as response
          req.logout()
          return user
        }
      },
      login: {
        type: UserType,
        args: {
          email: { type: GraphQLString },
          password: { type: GraphQLString }
        },
        resolve(parentValue, { email, password }, req) {
          return AuthService.login({ email, password, req }) //make sure to return it as it is a promise.
        }
      }
    }
})

module.exports = mutation