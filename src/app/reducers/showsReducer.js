import { GET_SHOWS, CHANGE_SELECTION_STATE } from "../actions/index";
import data from "../../data.json";

const initialState = {
    shows: data,
};

const showsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SHOWS:
            return {
                ...state,
            };
        case CHANGE_SELECTION_STATE:
            const updatedState = { ...state };
            updatedState.shows[action.payload.id].selected =
                action.payload.selected;
            return updatedState;
        default:
            return state;
    }
};

export default showsReducer;
