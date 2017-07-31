import get from 'lodash/get'
import { initialState, getPlayerState, getList, getDetail } from './selectors'
import { PLAYER_LIST_REQUEST, PLAYER_LIST_SUCCESS } from './actions'

export default (state = initialState, { type, payload, meta }) => {
    const resource = get(meta, 'resource')
    switch (type) {
        case PLAYER_LIST_REQUEST:
            return {
                ...state,
                [resource]: {
                    ...getPlayerState(state, resource),
                    players: getList(initialState, resource),
                },
            }
        case PLAYER_LIST_SUCCESS:
            return {
                ...state,
                [resource]: {
                    ...getPlayerState(state, resource),
                    players: payload,
                },
            }
        default:
            return state
    }
}