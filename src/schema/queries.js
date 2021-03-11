const { GraphQLObjectType } = require('graphql')
const baconQueries = require('../model/bacon/queries')

module.exports = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        bacon: baconQueries.bacon,
        devicetype: baconQueries.devicetype
    }
})