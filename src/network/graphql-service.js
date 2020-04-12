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
    }
}