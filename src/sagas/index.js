import { all } from 'redux-saga/effects'
import { LinksSaga } from './Links';

export default function* rootSaga() {
    yield all([
        LinksSaga(),
    ])
}
