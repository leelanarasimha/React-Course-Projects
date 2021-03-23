export const isAuthenticated = (state) => {
    if (state.auth.auth.idToken) return true;
    return false;
};
