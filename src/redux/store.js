import { createStore, applyMiddleware, compose } from "redux";
import persistStore from "redux-persist/es/persistStore";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware()));

const persistor = persistStore(store);

export { store, persistor };
