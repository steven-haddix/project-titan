export const AUTH_LOGIN = 'AUTH_LOGIN'
export const AUTH_LOGIN_PREPARE = 'AUTH_LOGIN_PREPARE'
export const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST'
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS'
export const AUTH_LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'

export const authLoginPrepare = (service, { clientId, ...options } = {}) => ({
    type: AUTH_LOGIN_PREPARE,
    payload: {
        service,
        clientId,
        ...options,
    },
})

export const authLoginRequest = (service, { clientId, ...options } = {}) => ({
    type: AUTH_LOGIN_REQUEST,
    payload: {
        service,
        clientId,
        ...options,
    },
    meta: {
        thunk: `${service}Login`,
        // https://github.com/diegohaz/arc/wiki/Example-redux-modules#gtm
        gtm: service,
    },
})

export const authLoginSuccess = (user, request, thunk) => ({
    type: AUTH_LOGIN_SUCCESS,
    payload: user,
    meta: {
        request,
        thunk
    },
})

export const authLoginFailure = (error, request, thunk) => ({
    type: AUTH_LOGIN_FAILURE,
    error: true,
    payload: error,
    meta: {
        _error: 'test',
        request,
        thunk
    },
})

export const authLogout = () => ({ type: AUTH_LOGOUT })

export const AUTH_PASS_CHANGE_REQUEST = 'AUTH_PASS_CHANGE_REQUEST'
export const AUTH_PASS_CHANGE_SUCCESS = 'AUTH_PASS_CHANGE_SUCCESS'
export const AUTH_PASS_CHANGE_FAILURE = 'AUTH_PASS_CHANGE_FAILURE'

export const authChangePasswordRequest = (service, { ...options } = {}) => ({
    type: AUTH_PASS_CHANGE_REQUEST,
    payload: {
        ...options,
    },
    meta: {
        // https://github.com/diegohaz/arc/wiki/Example-redux-modules#gtm
        gtm: service,
    },
})

export const authChangePasswordSuccess = (user, request) => ({
    type: AUTH_PASS_CHANGE_SUCCESS,
    payload: user,
    meta: {
        request,
    },
})

export const authChangePasswordFailure = (error, request) => ({
    type: AUTH_PASS_CHANGE_FAILURE,
    error: true,
    payload: error,
    meta: {
        request,
    },
})
