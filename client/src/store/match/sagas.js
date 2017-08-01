import { take, put, call, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'

export function* matchList(api, { params }, { resource, thunk }) {
    try {
        const list = yield call([api, api.get], `/${resource}/list`, { params })
        yield put(actions.matchListSuccess(resource, list, { params }, thunk))
    } catch (e) {
        yield put(actions.matchListSuccess(resource, e, { params }, thunk))
    }
}

export function* watchMatchListRequest(api, { payload, meta }) {
    yield call(matchList, api, payload, meta)
}

export default function* ({ api }) {
    yield takeEvery(actions.MATCH_LIST_REQUEST, watchMatchListRequest, api)
}