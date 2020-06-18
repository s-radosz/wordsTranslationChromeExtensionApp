import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "./reducer";

const composeEnhancer = typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

export default function configureStore(initialState) {
    const store = createStore(
        reducer,
        initialState,
        composeEnhancer(applyMiddleware(logger)));
    return store;
}