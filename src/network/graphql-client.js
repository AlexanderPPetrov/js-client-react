import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import constants from '../constants';

export default new ApolloClient({
    link: new HttpLink({uri: constants.graphQLURL}),
    cache: new InMemoryCache(),
})