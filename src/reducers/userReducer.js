
import { USER_DATA } from "./../constants/";

export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_DATA:
            return {...state, user: action.payload}
        default:
            return state;
    }
} 