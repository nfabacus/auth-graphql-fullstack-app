const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = graphql

// do not include password in the fields below as we do not expose password.
const UserType = new GraphQLObjectType({
  name: 'UserType',
    fields: {
      id: { type: GraphQLID },
      email: { type: GraphQLString }
    }
})

module.exports = UserType