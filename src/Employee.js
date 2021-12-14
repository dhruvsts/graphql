const { gql } = require ("apollo-server");

const typeDefs = gql`
    type Employee {
        first_name: String!
        last_name: String!
        birth_day: Date!
        gender: Gender!
        employee_id: ID!
        new_hire; Boolean!
    }
    enum Gender{
        Male
        Female
    }
    scalar Date

    #Query
    type Query{
        getAllEmployees: [Employee!]!
    }
`;

module.exports = {typeDefs}