import { GET_SHOWS } from "../actions/index";
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
        default:
            return state;
    }
};

export default showsReducer;
