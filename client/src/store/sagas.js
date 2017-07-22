// https://github.com/diegohaz/arc/wiki/Sagas
import { all, fork } from 'redux-saga/effects'
import formActionSaga from 'redux-form-saga';

const req = require.context('.', true, /\.\/.+\/sagas\.js$/)

const sagas = req.keys().map(key => req(key).default)

sagas.push(formActionSaga)

export default function* (services = {}) {
    yield all(sagas.map(saga => fork(saga, services)))
}