import React from 'react';
import Movies from './components/Movies';
import Header from './components/header/Header';
import Home from './pages/Home';
import Games from './pages/Games';
import Favorite from './pages/Favorite';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import Profile from './pages/Profile';
import ProtectedPage from './pages/ProtectedPage';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";
import thunk from 'redux-thunk';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const store = createStore(reducers, applyMiddleware(thunk));



// Skype alexppetrov


const Layout = props => (
    <>
        <Header/>
        <div className="container mt-5">
            {props.children}
        </div>
    </>
)

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Layout>
            <Home/>
        </Layout>
    },
    {
        path: '/games',
        exact: true,
        main: () => <Layout>
            <Games/>
        </Layout>
    },
    {
        path: '/favorite',
        exact: false,
        main: () => <Layout>
            <Favorite/>
        </Layout>
    },
    {
        path: '/gallery',
        exact: false,
        main: () => <Layout>
            <Movies/>
        </Layout>
    },
    {
        path: '/popularmovies',
        exact: true,
        main: () => <Layout>
            <MovieList/>
        </Layout>
    },
    {
        path: '/moviedetails/:id',
        exact: false,
        main: () => <Layout>
            <MovieDetails/>
        </Layout>
    },
    {
        path: '/profile',
        exact: false,
        main: () => {
            return <Layout>
            <Profile/>
        </Layout>
        }
    },
    {
        path: '/protected',
        exact: false,
        main: () => {
            return <Layout>
            <ProtectedPage/>
        </Layout>
        }
    },

]

const getRoutes = () => {
    return routes.map((route, index) => {
        return <Route
            exact={route.exact} 
            key={index}
            path={route.path}>
            {route.main}
        </Route>
    })
}


function App() {
    return <Provider store={store}>
        <Router>
            <Switch>
                {getRoutes()}
            </Switch>
        </Router>
    </Provider>
}

export default App;


//TODO
// 1. Да се добави в навигацията нов линк 
// към нова страничка (компонент) MovieList.js
// * Да се добави в routes, да се дефинира път 
// "/popularmovies", на който да се зареди MovieList 

// 2. В MovieList да се зареди компонент отговарящ на един
// филм, примерно SingleMovie.js
