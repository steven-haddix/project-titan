import jwtDecode from 'jwt-decode';

export const initialState = (token => ({
    user: token ? jwtDecode(token) : null,
}))(localStorage.authToken)

export const getUser = (state = initialState) => state.user || initialState.user