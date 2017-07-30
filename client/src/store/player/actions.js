export const PLAYER_LIST_REQUEST = 'PLAYER_LIST_REQUEST'
export const PLAYER_LIST_SUCCESS = 'PLAYER_LIST_SUCCESS'
export const PLAYER_LIST_FAILURE = 'PLAYER_LIST_FAILURE'

export const playerListRequest = (resource) => ({
    type: PLAYER_LIST_REQUEST,
    payload: {},
    meta: {
        resource,
        thunk: `playerList`,
    },
})

export const playerListSuccess = (resource, detail, request, thunk) => ({
    type: PLAYER_LIST_SUCCESS,
    payload: detail,
    meta: {
        resource,
        request,
        thunk
    },
})

export const playerListFailure = (resource, error, request, thunk) => ({
    type: PLAYER_LIST_FAILURE,
    error: true,
    payload: error,
    meta: {
        resource,
        request,
        thunk,
    },
})
