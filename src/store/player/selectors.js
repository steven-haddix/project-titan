export const initialState = {}

export const initialResourceState = {
    players: [],
    detail: null,
}

export const getPlayerState = (state = initialState, resource) =>
    state[resource] || initialResourceState

export const getList = (state = initialState, resource) =>
    getPlayerState(state, resource).players

export const getDetail = (state = initialState, resource) =>
    getPlayerState(state, resource).detail

export const getFilteredList = (state = initialState, resource, filterValue, resourceAttribute) =>
    getList(state, resource).filter(player => player[resourceAttribute] !== filterValue)


