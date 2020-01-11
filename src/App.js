import React from 'react';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import ReduxComponent from './components/ReduxComponent';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';


import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";
import thunk from 'redux-thunk';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const store = createStore(reducers, applyMiddleware(thunk));


const Layout = props => (
    <>
        <Header/>
        {props.children}
        <Footer/>
    </>
)

function App() {
    return <Router>
        <div>Tralala</div>
        <Switch>
            <Route exact path="/">
                <FunctionalComponent
                    description="Description example"
                    title="Functional Component Title"
                ></FunctionalComponent>
            </Route>
            <Route path="/class">
                <ClassComponent></ClassComponent>
            </Route>
        </Switch>
    </Router>
}

export default App;
