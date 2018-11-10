import { put, takeEvery, call, all, fork } from 'redux-saga/effects';
import * as ActionTypes from '../constrants/Actions';
import * as LinkActions from '../actions/Links';
import * as LinkServices from '../services/LinksServices';

function *getLinksAsync(action) {
    let data = yield call(LinkServices.getLinks);
    let links = (data.kids || []).map(item => ({
        id: item,
        saved: false
    }));
    yield put(LinkActions.getLinksSuccess({links}))
}

function* saveLink(action) {
    let data = yield call(LinkServices.getLinks);
    let links = (data.kids || []).map(item => {
        return item === action.payload.id
            ? {
                id: item,
                saved: true
            }
            : {
                id: item,
                saved: false
            }
    });
    yield put(LinkActions.getLinksSuccess({links}))
}

function* removeLink(action) {
    let data = yield call(LinkServices.getLinks);
    let links = (data.kids || []).map(item => {
        return item === action.payload.id
            ? {
                id: item,
                saved: false
            }
            : {
                id: item,
                saved: false
            }
    });
    yield put(LinkActions.getLinksSuccess({links: links.filter(link => link)}))
}

export function *LinksSaga() {
    yield takeEvery(ActionTypes.GET_LINKS_REQUEST, getLinksAsync);
    yield takeEvery(ActionTypes.SAVE_LINK, saveLink);
    yield takeEvery(ActionTypes.REMOVE_LINK, removeLink);
}
