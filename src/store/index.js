
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducers/';

const initialState = {
    userReducer: {
        user: {
            username: 'ininame',
            password: 'inipass',
            token: 'token'
        }
    },
    pruebaReducer: {
        prueba : {
            valor: 'val1',
            valor2: 'val2'
        }
    }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)));
