import { GET_SHOWS, CHANGE_SELECTION_STATE } from "../actions";
import initialShows from "../../data.json";

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

export const fetchShows = () => {
    return async (dispatch) => {
        const localStoragedShows = localStorage.getItem("schedule");
        const parsedShows = JSON.parse(localStoragedShows);
        if (parsedShows) {
            await dispatch(getShows(parsedShows));
        } else {
            await dispatch(getShows(initialShows));
        }
    };
};
