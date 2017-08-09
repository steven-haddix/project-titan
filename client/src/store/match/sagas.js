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

export function* matchCreate(api, { data }, { resource, thunk }) {
    try {
        const list = yield call([api, api.post], `/${resource}/create`, { ...data })
        yield put(actions.matchCreateSuccess(resource, list, { data }, thunk))
    } catch (e) {
        yield put(actions.matchCreateFailure(resource, e, { data }, thunk))
    }
}

export function* watchMatchListRequest(api, { payload, meta }) {
    yield call(matchList, api, payload, meta)
}

export function* watchMatchCreateRequest(api, { payload, meta }) {
    yield call(matchCreate, api, payload, meta)
}

export default function* ({ api }) {
    yield takeEvery(actions.MATCH_LIST_REQUEST, watchMatchListRequest, api)
    yield takeEvery(actions.MATCH_CREATE_REQUEST, watchMatchCreateRequest, api)
}