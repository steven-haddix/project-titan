export const initialState = {}

export const initialResourceState = {
    matches: [],
    detail: null,
}

export const getMatchState = (state = initialState, resource) =>
    state[resource] || initialResourceState

export const getList = (state = initialState, resource) =>
    getMatchState(state, resource).matches

export const getDetail = (state = initialState, resource) =>
    getMatchState(state, resource).detail