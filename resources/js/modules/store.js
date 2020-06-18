import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "./reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() || compose;

export default function configureStore(initialState) {
    const store = createStore(
        reducer,
        initialState,
        composeEnhancer(applyMiddleware(logger)));
    return store;
}