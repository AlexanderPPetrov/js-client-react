import gql from 'graphql-tag';
import graphQLClient from './graphql-client';

export default {
    async getGames(responseFields) {
        const response = await graphQLClient.query({
            query: gql `
                query {
                    games {
                        ${responseFields}
                    }
                }
            `
        })
        return response;
    },
    async addGame(variables, responseFields){
        const response = await graphQLClient.mutate({
            mutation: gql `mutation($name: String!, $description: String!, $imageUrl: String!, $price: Float!){
                addGame(name: $name, description: $description, imageUrl: $imageUrl, price: $price){
                    ${responseFields}
                }
            }`,
            variables
        })
        return response;
    }
}