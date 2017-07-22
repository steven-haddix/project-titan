import { initialState } from './selectors'
import { AUTH_LOGIN_SUCCESS, AUTH_LOGOUT } from './actions'

export default (state = initialState, { type, payload }) => {
    console.log(type)
    switch (type) {
        case AUTH_LOGIN_SUCCESS:
            payload.token ? localStorage.authToken = payload.token : null
            return {
                ...state,
                user: payload,
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