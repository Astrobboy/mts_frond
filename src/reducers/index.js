import { combineReducers } from 'redux';
import { pruebaReducer } from './pruebaReducer';
import { userReducer } from './userReducer';


/*const reducer = (state= {}, action) => {
    switch (action.type) {
        case 'USER_DATA':
            console.log('hola',action.payload);
            console.log(...state, 'hola');
            state = {
                ...state, user: action.payload
            }
            return state;
        default:
            return state;
    }
} */


export default combineReducers({
    userReducer,
    pruebaReducer
})