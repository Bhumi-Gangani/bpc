import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import persistStore from 'redux-persist/es/persistStore';
import persistedReducer from './rootReducer';

const updatedApplyMiddleware = applyMiddleware(thunk)
const store = createStore(
    persistedReducer,
    updatedApplyMiddleware
);

let persistor = persistStore(store)


export { persistor, store };