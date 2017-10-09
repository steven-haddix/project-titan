import * as selectors from './selectors'

export const altState = {
    players: {
        players: [{name: 'one'}, {name: 'two'}, {name: 'three'}],
        detail: null,
    }
}

test('initialState', () => {
    expect(selectors.initialState).toEqual({})
})

test('initialResourceState', () => {
    expect(selectors.initialResourceState).toEqual({
        players: [],
        detail: null,
    })
})

test('getResourceState', () => {
    expect(selectors.getPlayerState()).toBe(selectors.initialResourceState)
    expect(selectors.getPlayerState(undefined, 'players')).toBe(selectors.initialResourceState)
    expect(selectors.getPlayerState(altState, 'players')).toBe(altState.players)
})

test('getList', () => {
    expect(selectors.getList()).toBe(selectors.initialResourceState.players)
    expect(selectors.getList({})).toBe(selectors.initialResourceState.players)
    expect(selectors.getList(undefined, 'players')).toBe(selectors.initialResourceState.players)
    expect(selectors.getList(altState, 'players')).toBe(altState.players.players)
})

test('getFilteredList', () => {
    expect(selectors.getFilteredList(altState, 'players', null, 'name')).toEqual(altState.players.players)
    expect(selectors.getFilteredList(altState, 'players', 'two', 'name')).toEqual([{name: 'one'}, {name: 'three'}])
})
