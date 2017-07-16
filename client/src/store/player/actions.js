export const PLAYER_CREATE_REQUEST = 'PLAYER_CREATE_REQUEST'
export const PLAYER_CREATE_SUCCESS = 'PLAYER_CREATE_SUCCESS'
export const PLAYER_CREATE_FAILURE = 'PLAYER_CREATE_FAILURE'

export const playerCreateRequest = (player, data) => ({
    type: PLAYER_CREATE_REQUEST,
    payload: { data },
    meta: {
        player,
        // https://github.com/diegohaz/arc/wiki/Actions#async-actions
        thunk: `${player}Create`,
    },
})

export const playerCreateSuccess = (player, detail, request, thunk) => ({
    type: PLAYER_CREATE_SUCCESS,
    payload: detail,
    meta: {
        request,
        thunk,
        player,
        // https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
        entities: player,
    },
})

export const playerCreateFailure = (player, error, request, thunk) => ({
    type: PLAYER_CREATE_FAILURE,
    error: true,
    payload: error,
    meta: {
        request,
        player,
        // https://github.com/diegohaz/arc/wiki/Actions#async-actions
        thunk,
    },
})

export const PLAYER_LIST_READ_REQUEST = 'PLAYER_LIST_READ_REQUEST'
export const PLAYER_LIST_READ_SUCCESS = 'PLAYER_LIST_READ_SUCCESS'
export const PLAYER_LIST_READ_FAILURE = 'PLAYER_LIST_READ_FAILURE'

export const playerListReadRequest = (player, params) => ({
    type: PLAYER_LIST_READ_REQUEST,
    payload: { params },
    meta: {
        player,
        thunk: `${player}ListRead`,
    },
})

export const playerListReadSuccess = (player, list, request, thunk) => ({
    type: PLAYER_LIST_READ_SUCCESS,
    payload: list,
    meta: {
        request,
        thunk,
        player,
        entities: player,
    },
})

export const playerListReadFailure = (player, error, request, thunk) => ({
    type: PLAYER_LIST_READ_FAILURE,
    error: true,
    payload: error,
    meta: {
        request,
        thunk,
        player,
    },
})

export const PLAYER_DETAIL_READ_REQUEST = 'PLAYER_DETAIL_READ_REQUEST'
export const PLAYER_DETAIL_READ_SUCCESS = 'PLAYER_DETAIL_READ_SUCCESS'
export const PLAYER_DETAIL_READ_FAILURE = 'PLAYER_DETAIL_READ_FAILURE'

export const playerDetailReadRequest = (player, needle) => ({
    type: PLAYER_DETAIL_READ_REQUEST,
    payload: { needle },
    meta: {
        player,
        thunk: `${player}DetailRead`,
    },
})

export const playerDetailReadSuccess = (player, detail, request, thunk) => ({
    type: PLAYER_DETAIL_READ_SUCCESS,
    payload: detail,
    meta: {
        request,
        thunk,
        player,
        entities: player,
    },
})

export const playerDetailReadFailure = (player, error, request, thunk) => ({
    type: PLAYER_DETAIL_READ_FAILURE,
    error: true,
    payload: error,
    meta: {
        request,
        thunk,
        player,
    },
})

export const PLAYER_UPDATE_REQUEST = 'PLAYER_UPDATE_REQUEST'
export const PLAYER_UPDATE_SUCCESS = 'PLAYER_UPDATE_SUCCESS'
export const PLAYER_UPDATE_FAILURE = 'PLAYER_UPDATE_FAILURE'

export const playerUpdateRequest = (player, needle, data) => ({
    type: PLAYER_UPDATE_REQUEST,
    payload: { needle, data },
    meta: {
        player,
        thunk: `${player}Update`,
    },
})

export const playerUpdateSuccess = (player, detail, request, thunk) => ({
    type: PLAYER_UPDATE_SUCCESS,
    payload: detail,
    meta: {
        request,
        thunk,
        player,
        entities: player,
    },
})

export const playerUpdateFailure = (player, error, request, thunk) => ({
    type: PLAYER_UPDATE_FAILURE,
    error: true,
    payload: error,
    meta: {
        request,
        thunk,
        player,
    },
})

export const PLAYER_DELETE_REQUEST = 'PLAYER_DELETE_REQUEST'
export const PLAYER_DELETE_SUCCESS = 'PLAYER_DELETE_SUCCESS'
export const PLAYER_DELETE_FAILURE = 'PLAYER_DELETE_FAILURE'

export const playerDeleteRequest = (player, needle) => ({
    type: PLAYER_DELETE_REQUEST,
    payload: { needle },
    meta: {
        player,
        thunk: `${player}Delete`,
    },
})

export const playerDeleteSuccess = (player, request, thunk) => ({
    type: PLAYER_DELETE_SUCCESS,
    meta: {
        request,
        thunk,
        player,
    },
})

export const playerDeleteFailure = (player, error, request, thunk) => ({
    type: PLAYER_DELETE_FAILURE,
    error: true,
    payload: error,
    meta: {
        request,
        thunk,
        player,
    },
})