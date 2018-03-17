import { PRUEBA } from "./../constants/";

export const pruebaReducer = (state = {}, action) => {
    switch (action.type) {
        case PRUEBA:
            state = {
                ...state, prueba: action.payload
            }
            return state;
        default:
            return state;
    }
} 