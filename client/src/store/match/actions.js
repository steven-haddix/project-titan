export const MATCH_LIST_REQUEST = 'MATCH_LIST_REQUEST'
export const MATCH_LIST_SUCCESS = 'MATCH_LIST_SUCCESS'
export const MATCH_LIST_FAILURE = 'MATCH_LIST_FAILURE'

export const matchListRequest = (resource) => ({
    type: MATCH_LIST_REQUEST,
    payload: {},
    meta: {
        resource,
        thunk: `matchList`,
    },
})

export const matchListSuccess = (resource, detail, request, thunk) => ({
    type: MATCH_LIST_SUCCESS,
    payload: detail,
    meta: {
        resource,
        request,
        thunk
    },
})

export const matchListFailure = (resource, error, request, thunk) => ({
    type: MATCH_LIST_FAILURE,
    error: true,
    payload: error,
    meta: {
        resource,
        request,
        thunk,
    },
})

export const MATCH_CREATE_REQUEST = 'MATCH_CREATE_REQUEST'
export const MATCH_CREATE_SUCCESS = 'MATCH_CREATE_SUCCESS'
export const MATCH_CREATE_FAILURE = 'MATCH_CREATE_FAILURE'

export const matchCreateRequest = (resource, data) => ({
    type: MATCH_CREATE_REQUEST,
    payload: { data },
    meta: {
        resource,
        thunk: `${resource}Create`,
    },
})

export const matchCreateSuccess = (resource, detail, request, thunk) => ({
    type: MATCH_CREATE_SUCCESS,
    payload: detail,
    meta: {
        request,
        thunk,
        resource,
        entities: resource,
    },
})

export const matchCreateFailure = (resource, error, request, thunk) => ({
    type: MATCH_CREATE_FAILURE,
    error: true,
    payload: error,
    meta: {
        request,
        resource,
        thunk,
    },
})