import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux"
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from "redux-thunk"
import logger from "redux-logger"
import reducer from './reducers/index'
import "./index.css";
import App from "./components/App";

const store = createStore(reducer, compose(
 applyMiddleware(thunk, logger),
 window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
),

)
ReactDOM.render(
<Provider store={store}>
 <App />
 </Provider>
 , document.getElementById("root"));
