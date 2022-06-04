import { GET_SHOWS } from "../actions";

export const getShows = (shows) => {
    return (dispatch) => {
        dispatch({
            type: GET_SHOWS,
            payload: shows,
        });
    };
};
