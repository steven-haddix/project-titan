import jwtDecode from 'jwt-decode'
import { initialState } from './selectors'
import { PLAYER_LIST_SUCCESS } from './actions'

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case PLAYER_LIST_SUCCESS:
            return {
                ...state,
                players: payload,
            }
        default:
            return state
    }
}