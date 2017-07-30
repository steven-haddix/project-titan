export const initialState = {}

export const initialResourceState = {
    players: [],
    detail: null,
}

export const getPlayerState = (state = initialState, resource) =>
    state[resource] || initialResourceState

export const getList = (state = initialState, resource) =>
    getPlayerState(state, resource).list

export const getDetail = (state = initialState, resource) =>
    getPlayerState(state, resource).detail