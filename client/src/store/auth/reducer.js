import { initialState } from './selectors'
import { AUTH_LOGIN_SUCCESS, AUTH_LOGOUT } from './actions'

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case AUTH_LOGIN_SUCCESS:
            return {
                ...state,
                user: payload,
            }
        case AUTH_LOGOUT:
            return {
                ...state,
                user: initialState.user,
            }
        default:
            return state
    }
}