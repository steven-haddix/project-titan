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

export const authLoginRequest = (service, data) => ({
    type: AUTH_LOGIN_REQUEST,
    payload: {
        service,
        ...data
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

export const authLoginFailure = (resource, error, request, thunk) => ({
    type: AUTH_LOGIN_FAILURE,
    error: true,
    payload: error,
    meta: {
        request,
        thunk,
        resource
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

export const AUTH_SIGN_UP_REQUEST = 'AUTH_SIGN_UP_REQUEST'
export const AUTH_SIGN_UP_SUCCESS = 'AUTH_SIGN_UP_SUCCESS'
export const AUTH_SIGN_UP_FAILURE = 'AUTH_SIGN_UP_FAILURE'

export const authSignUpRequest = (service, data) => ({
    type: AUTH_SIGN_UP_REQUEST,
    payload: {
        service,
        ...data
    },
    meta: {
        thunk: `${service}Login`,
        // https://github.com/diegohaz/arc/wiki/Example-redux-modules#gtm
        gtm: service,
    },
})

export const authSignUpSuccess = (user, request, thunk) => ({
    type: AUTH_SIGN_UP_SUCCESS,
    payload: user,
    meta: {
        request,
        thunk
    },
})

export const authSignUpFailure = (error, request, thunk) => ({
    type: AUTH_SIGN_UP_FAILURE,
    error: true,
    payload: error,
    meta: {
        request,
        thunk
    },
})

export const AUTH_CONFIRM_REQUEST = 'AUTH_CONFIRM_REQUEST'
export const AUTH_CONFIRM_SUCCESS = 'AUTH_CONFIRM_SUCCESS'
export const AUTH_CONFIRM_FAILURE = 'AUTH_CONFIRM_FAILURE'

export const authConfirmRequest = (service, data) => ({
    type: AUTH_CONFIRM_REQUEST,
    payload: {
        service,
        ...data
    },
    meta: {
        thunk: `${service}Login`,
        // https://github.com/diegohaz/arc/wiki/Example-redux-modules#gtm
        gtm: service,
    },
})

export const authConfirmSuccess = (user, request, thunk) => ({
    type: AUTH_CONFIRM_SUCCESS,
    payload: user,
    meta: {
        request,
        thunk
    },
})

export const authConfirmFailure = (error, request, thunk) => ({
    type: AUTH_CONFIRM_FAILURE,
    error: true,
    payload: error,
    meta: {
        request,
        thunk
    },
})