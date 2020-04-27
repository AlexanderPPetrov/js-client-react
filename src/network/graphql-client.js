import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import constants from '../constants';
import { setContext } from 'apollo-link-context';


const httpLink = createHttpLink({
    uri: constants.graphQLURL,
})

const authLink = setContext((_, { headers}) => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    }
})

export default new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
})