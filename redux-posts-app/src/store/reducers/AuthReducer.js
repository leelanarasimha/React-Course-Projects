import {
    SIGNUP_CONFIRMED_ACTION,
    SIGNUP_FAILED_ACTION,
} from '../actions/AuthActions';

const initialState = {
    auth: {
        email: '',
        idToken: '',
        localId: '',
        expiresIn: '',
        refreshToken: '',
    },
    errorMessage: '',
    successMessage: '',
};

export function AuthReducer(state = initialState, action) {
    if (action.type === SIGNUP_CONFIRMED_ACTION) {
        return {
            ...state,
            auth: action.payload,
            errorMessage: '',
            successMessage: 'Signup Successfully Completed',
        };
    }

    if (action.type === SIGNUP_FAILED_ACTION) {
        return {
            ...state,
            errorMessage: action.payload,
            successMessage: '',
        };
    }
    return state;
}
