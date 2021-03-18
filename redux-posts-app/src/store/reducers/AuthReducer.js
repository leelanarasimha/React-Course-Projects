import { SIGNUP_CONFIRMED_ACTION } from '../actions/AuthActions';

const initialState = {
    auth: {
        email: '',
        idToken: '',
        localId: '',
        expiresIn: '',
        refreshToken: '',
    },
};

export function AuthReducer(state = initialState, action) {
    if (action.type === SIGNUP_CONFIRMED_ACTION) {
        debugger;
        return {
            ...state,
            auth: action.payload,
        };
    }
    return state;
}
