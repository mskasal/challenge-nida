import { StoreState } from './types';
import thunk from "redux-thunk";
import {
    createStore,
    applyMiddleware,
    compose,
    GenericStoreEnhancer
} from 'redux';
import { pokeReducer } from './reducers';

let win: any = window;
// https://github.com/zalmoxisus/redux-devtools-extension
let devToolExtension = win.__REDUX_DEVTOOLS_EXTENSION__ && win.__REDUX_DEVTOOLS_EXTENSION__();

const makeCompose = compose(
    devToolExtension,
    applyMiddleware(thunk),
) as GenericStoreEnhancer;

const configureStore = (initialState: StoreState) => {
    return createStore(pokeReducer, initialState, makeCompose);
};

export default configureStore;