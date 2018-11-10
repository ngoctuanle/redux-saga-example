import * as Actions from '../constrants/Actions';

export const getLinksRequest = (payload) => ({
    type: Actions.GET_LINKS_REQUEST,
    payload
});

export const getLinksSuccess = (payload) => ({
    type: Actions.GET_LINKS_SUCCESS,
    payload
});

export const getLinksFail = (payload) => ({
    type: Actions.GET_LINKS_FAIL,
    payload
});

export const saveLink = (payload) => ({
    type: Actions.SAVE_LINK,
    payload
});

export const removeLink = (payload) => ({
    type: Actions.REMOVE_LINK,
    payload
});
