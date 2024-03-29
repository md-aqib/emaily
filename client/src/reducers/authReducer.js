import { FETCH_USER } from "../actions/types";


export default function authReducer(state = null, action) {
    switch (action.type) {
        case FETCH_USER:
            return action.payloads || false;
        default:
            return state;
    }
}