const { GraphQLList,
        GraphQLID,
        GraphQLString,
        GraphQLBoolean,
        GraphQLFloat } = require('graphql')
const type = require('./type')
const mutation = require('./mutations')
const Bacon = require("./bacon")

// Defines the queries
module.exports = {
    devicetype: {
        type: new GraphQLList(type),
        args: {
            DeviceType: {
                type: GraphQLString
            },
            IsActive: {
                type: GraphQLBoolean
            }
        },
        resolve: Bacon.findMatching.bind(Bacon)
    },
    bacon: {
        type,
        args: {
            ID: {
                type: GraphQLID
            }
        },
        resolve: Bacon.getByID.bind(Bacon)
    }
}