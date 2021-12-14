const {ApolloServer, gql} = require('apollo-server');

const typeDefs = gql`
    type Query{
        hello: String!
    }
    type User{
        id: ID!
        username: String!
    }
    type  UserInfo {
        username: String!
        password: String!
        age: Int       
    }
    
    type Error{
        field: String!
        message: String!
    }
    
    type RegisterResponse{
        errors: [Error]
        user: User!
    }
    type Mutation{
        register(userInfo: UserInfo!): RegisterResponse
        login(userInfo: UserInfo!): Boolean
    }
`

const resolvers = {
    Query: {
        hello: () => "Dhruv is awesome"
    },
    Mutation:{
        login: () => true,
        register: () => ({
            errors: [{
                field: 'username',
                message: 'bad'
            }],
            user: {
                id: 1,
                username: "Bob"
            }
           
        })
    }
};

const server = new ApolloServer({ typeDefs, resolvers});

server.listen().then(({url}) => console.log(`server started at ${url}`));
