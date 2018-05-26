const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLString
} = graphql

// do not include password in the fields below as we do not expose password.
const UserType = new GraphQLObjectType({
  name: 'UserType',
    fields: {
      email: { type: GraphQLString }
    }
})

module.exports = UserType