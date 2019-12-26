import React from 'react';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import ReduxComponent from './components/ReduxComponent';

import { createStore, applyMiddleware } from "redux";
import { Provider }  from "react-redux";
import reducers from "./redux/reducers";
import thunk from 'redux-thunk';
const store = createStore(reducers, applyMiddleware(thunk));

function App() {
    return <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-4">
                <FunctionalComponent></FunctionalComponent>

                <ClassComponent></ClassComponent>

                <Provider store={store}>
                    <ReduxComponent></ReduxComponent>
                </Provider>
            </div>
        </div>

    </div>
}

export default App;
