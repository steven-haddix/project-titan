import get from 'lodash/get'
import { initialState, getMatchState, getList, getDetail } from './selectors'
import { MATCH_LIST_REQUEST, MATCH_LIST_SUCCESS } from './actions'

export default (state = initialState, { type, payload, meta }) => {
    const resource = get(meta, 'resource')
    switch (type) {
        case MATCH_LIST_REQUEST:
            return {
                ...state,
                [resource]: {
                    ...getMatchState(state, resource),
                    matches: getList(initialState, resource),
                },
            }
        case MATCH_LIST_SUCCESS:
            return {
                ...state,
                [resource]: {
                    ...getMatchState(state, resource),
                    matches: payload,
                },
            }
        default:
            return state
    }
}