import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootRecuder from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootRecuder,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;