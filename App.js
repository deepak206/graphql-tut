const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

const schema = buildSchema(`
type Query {
    hello:String
}`);

const root = {
    hello:() => {
        return "Hello World";
    }
}

app.use('/graphql', graphqlHTTP({
    schema:schema,
    rootValue: root,
    graphiql: true
}));

app.listen(5001, () => {
    console.log('app is running on 5001 port');
})