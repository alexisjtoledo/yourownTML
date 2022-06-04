import { GET_SHOWS, CHANGE_SELECTION_STATE } from "../actions";

export const getShows = (shows) => {
    return (dispatch) => {
        dispatch({
            type: GET_SHOWS,
            payload: shows,
        });
    };
};

export const changeSelectionState = (show) => {
    return (dispatch) => {
        dispatch({
            type: CHANGE_SELECTION_STATE,
            payload: show,
        });
    };
};
