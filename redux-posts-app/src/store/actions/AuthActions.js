import { formatError, signUp } from '../../services/AuthService';

export const SIGNUP_CONFIRMED_ACTION = '[signup action] confirmed signup';
export const SIGNUP_FAILED_ACTION = '[signup action] failed signup';
export const LOADING_TOGGLE_ACTION = '[Loading action] toggle loading';

export function signupAction(email, password) {
    return (dispatch) => {
        signUp(email, password)
            .then((response) => {
                dispatch(confirmedSignupAction(response.data));
            })
            .catch((error) => {
                const errorMessage = formatError(error.response.data);
                dispatch(signupFailedAction(errorMessage));
            });
    };
}

export function confirmedSignupAction(payload) {
    return {
        type: SIGNUP_CONFIRMED_ACTION,
        payload,
    };
}

export function signupFailedAction(message) {
    return {
        type: SIGNUP_FAILED_ACTION,
        payload: message,
    };
}

export function loadingToggleAction(status) {
    return {
        type: LOADING_TOGGLE_ACTION,
        payload: status,
    };
}
