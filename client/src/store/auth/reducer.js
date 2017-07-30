import jwtDecode from 'jwt-decode'
import { initialState } from './selectors'
import { AUTH_LOGIN_SUCCESS, AUTH_LOGOUT } from './actions'

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case AUTH_LOGIN_SUCCESS:
            payload.jwt ? localStorage.authToken = payload.jwt : null
            return {
                ...state,
                user: jwtDecode(payload.jwt),
            }
        case AUTH_LOGOUT:
            delete localStorage.authToken
            return {
                ...state,
                user: initialState.user,
            }
        default:
            return state
    }
}