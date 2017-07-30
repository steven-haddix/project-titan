import { take, put, call, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'

export function* playerList(api, { params }, { resource, thunk }) {
    try {
        const list = yield call([api, api.get], `/${resource}/list`, { params })
        yield put(actions.playerListSuccess(resource, list, { params }, thunk))
    } catch (e) {
        yield put(actions.playerListFailure(resource, e, { params }, thunk))
    }
}

export function* watchPlayerListRequest(api, { payload, meta }) {
    yield call(playerList, api, payload, meta)
}

export default function* ({ api }) {
    yield takeEvery(actions.PLAYER_LIST_REQUEST, watchPlayerListRequest, api)
}