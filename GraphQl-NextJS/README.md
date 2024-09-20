## Create a project
- npx create-next-app@latest nextjs-graphql-apollo
- cd nextjs-graphql-apollo

## Packages needed
- npm install graphql [To enable graphQL]
- npm i @apollo/server [framework doe apollo server]
- npm i apollo-server-core [ optional, as its integrated with @apollo/server This is very fundamental tool, this enables the playground]
- npm i @as-integrations/next graphql-tag

### Install this in one line
- npm install @apollo/server graphql @as-integrations/next graphql-tag



### Folder Structure
```
├── src
│   ├── app
│   │   ├── favicon.ico
│   │   ├── fonts
│   │   │   ├── GeistMonoVF.woff
│   │   │   └── GeistVF.woff
│   │   ├── globals.css
│   │   └── layout.js
│   └── pages
│       ├── about.js
│       ├── api
│       │   └── graphql.js
│       └── index.js
└── tailwind.config.js
```

### URLS
- Home page : http://localhost:3000
- About US : http://localhost:3000/about
- API : http://localhost:3000/api/graphql
- There is a hardcoded Client Query and that resolves
- check the Server configuration here - `/src/pages/api/graphql.js`
```
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';

// Define the GraphQL schema
const typeDefs = `#graphql
  type Query {
    hello: String
  }
  `;

// Define the resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello, world!',
  },
};

const server = new ApolloServer({
  typeDefs:typeDefs,
  resolvers:resolvers,
  introspection: true
});

export const config = {
  api: {
    bodyParser: true,
  },
};

export default startServerAndCreateNextHandler(server);
// export const {GET, POST} = startServerAndCreateNextHandler(server);
```

- Go to Playground - `localhost:3000/api/graphql` and send the Query as `hello` and get response as `Hello, world!`

## Tests
- `Jest` for running tests
- `React Testing Library` for testing React components
- `Apollo MockedProvider` for testing GraphQL queries and mutations

- Install dependancies : `npm install --save-dev jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom @graphql-tools/mock`
- ### Unit Test

- jest is the test runner.
- @testing-library/react is for testing React components.
- @testing-library/jest-dom provides custom matchers to test DOM nodes.
- @graphql-tools/mock helps to mock your GraphQL queries and mutations.
- jest-environment-jsdom is necessary for testing DOM in a Node.js environment.

### Test Folder Structure
```
/src
├── app
├── pages
├── test
│   ├── unit
│   │   ├── index.test.js        # Unit tests for Home page
│   │   ├── about.test.js        # Unit tests for About page
│   │   └── graphql.test.js      # Unit tests for GraphQL API
│   └── E2E
│       ├── homepage.cy.js       # E2E tests for Home page
│       └── aboutpage.cy.js      # E2E tests for About page
```

###  Unit Test
- /src/test/unit/*.test.js
- `Jest` is used
- There are two files on root folder - jest.config.js & jest.setup.js
- update the script to find the test files ` "test:unit": "jest --testMatch \"**/src/test/unit/**/*.test.js\"",`

## E2E Test
- `Cypress` is used 
- install Cypress - `npm install --save-dev cypress`
- initialise cypress - `npx cypress open`
- Run cypress
  - `npx cypress open` : This will give browser
  - `npx cypress run` : For headless