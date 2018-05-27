const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;
const UserType = require('./user_type')

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        //req.user becomes available from passport. If user is authenticated, request will have req.user.  If not authenticated, request will not have req.user.
        //So, use that. return user info from req.user if the user is authenticated, otherwise return null as there is no req.user.
        return req.user
      }
    }
  }
});

module.exports = RootQueryType;

