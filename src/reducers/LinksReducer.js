import * as Actions from '../constrants/Actions';

let initialState = {
    links: [],
    waiting: false
};

const LinksReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.GET_LINKS_REQUEST:
            return {
                ...state,
                waiting: true
            };
        case Actions.GET_LINKS_SUCCESS:
            return {
                ...state,
                links: action.payload.links,
                waiting: false
            };
        case Actions.SAVE_LINK:
            return {
                ...state,
                waiting: true
            };
        case Actions.REMOVE_LINK:
            return {
                ...state,
                waiting: true
            };
        default:
            return state;
    }
};

export default LinksReducer;

