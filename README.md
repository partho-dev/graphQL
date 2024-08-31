## Why do we need GraphQL
- Get the data what is required, rather getting all from the server and then filter based on what is needed
- Work with a single endpoint rather maintaining multiple endpoints for different data points

## What is needed to know for GraphQL (AI Generated)
- Transitioning from REST to GraphQL involves understanding a few core concepts and terminologies, especially when integrating with tools like `Apollo Server and Client`. 

- Few Concepts in GraphQL

    - `Schema`:
        - Defines the structure of the API, including the types of data and the relationships between them. 
        - In GraphQL, the schema is the contract between the client and server.
        - Example: type Query `{ books: [Book] }`

    - `Types`:
        - Object Types: Define the shape of the objects you can query.
        - Query Type: Entry point for read operations.
        - Mutation Type: Entry point for write operations (create, update, delete).
        - Subscription Type: For real-time updates via WebSockets.

    - `Resolvers`:
        - Functions that handle fetching the data for each type defined in your schema. 
        - They map schema fields to actual data sources.

    - `Queries`:
        - The operations you use to request data. Unlike REST, a single query can request multiple types of related data in a single request.

    - `Mutations`:
        - Used to modify server-side data. Similar to POST, PUT, DELETE in REST but often bundled into a single mutation.

    - `Fields and Arguments`:
        - Fields are the specific pieces of data you want to retrieve. 
        - Arguments allow you to pass parameters to fields, making queries more dynamic.

    - `Fragments`:
        - Reusable units of fields that can be included in multiple queries.

    - `Apollo Server`:
        - A popular GraphQL server that works seamlessly with Node.js and Express.
        - Handles schema creation, setting up resolvers, and integrating with data sources like databases or REST APIs.

    - `Apollo Client:`
        - A GraphQL client that manages data fetching and state management in your React (or Next.js) application.
        Features include caching, optimistic UI updates, and error handling.


## Steps to Get Started

- `Set Up Apollo Server:`
    - Install necessary packages: `apollo-server, graphql, express.`
    - Define your GraphQL schema and resolvers.
    - Integrate Apollo Server with your existing Express app.

- `Creating a GraphQL Schema:`
    - Start simple, like defining a Book type and a query to fetch books.

- `Connect to a Database:`
    - Use a database like MongoDB or PostgreSQL with ORM/ODM tools such as Mongoose or Sequelize.
    - Create resolvers that interact with your database to fetch or modify data.

- `Integrating Apollo Client in Next.js:`
    - Install @apollo/client.
    - Set up Apollo Client in your Next.js project with a custom hook or ApolloProvider.
    - Create queries and mutations in your React components to interact with the GraphQL API.

- `Testing:`
    - Learn how to test GraphQL queries and mutations using tools like Jest or Mocha, similar to how you test REST APIs.

