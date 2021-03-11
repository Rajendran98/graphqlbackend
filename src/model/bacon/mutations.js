const { 
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLFloat,
    GraphQLBoolean
} = require('graphql')
const type = require('./type')
const Bacon = require('./bacon')

// Defines the mutations
module.exports = {
    addBacon: {
        type,
        args: {
            DeviceType:   { type: new GraphQLNonNull(GraphQLString) },
            IsActive:  { type: new GraphQLNonNull(GraphQLBoolean) },
        },
        resolve: Bacon.createEntry.bind(Bacon)
    },
    updateBacon: {
        type,
        args: {
            ID:     { type: GraphQLID },
            DeviceType:   { type:new GraphQLNonNull(GraphQLString) },
            IsActive:  { type: new GraphQLNonNull(GraphQLBoolean) },
        },
        resolve: Bacon.updateEntry.bind(Bacon)
    }
}
