import { GraphQLClient } from 'graphql-request'



 const endpoint ="https://rickandmortyapi.com/graphql"

 const client = new GraphQLClient(endpoint, {
    credentials: 'include',
    mode: 'cors',
  })




 export default client;