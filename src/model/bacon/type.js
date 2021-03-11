let {
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLBoolean,
    GraphQLList
} = require('graphql')

// Defines the type
module.exports = new GraphQLObjectType({
    name: 'Bacon',
    description: 'A bacon',
    fields: {
        ID: {
            type: new GraphQLNonNull(GraphQLID)
        },
        DeviceType: {
            type: new GraphQLNonNull(GraphQLString)
        },
        IsActive: {
            type: new GraphQLNonNull(GraphQLBoolean)
        }
    }
})