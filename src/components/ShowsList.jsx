import React, { useEffect } from "react";
import Show from "./Show";
import "../styles/ShowsList.sass";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../app/index";

const ShowsList = () => {
    /* REDUX ACTIONS */
    const dispatch = useDispatch();

    const { changeSelectionState } = bindActionCreators(
        actionCreators,
        dispatch,
    );

    /* REDUX STATE */
    const shows = useSelector((state) => state);

    const changeState = (currentItem) => {
        const newItem = currentItem;
        newItem.selected = !currentItem.selected;
        changeSelectionState(newItem);
    };

    return (
        <div className="shows-container">
            <ul className="shows-list">
                {shows.showsList.shows.map((show) => (
                    <div
                        key={show.id}
                        className={`shows-list-item-container ${
                            show.selected && "selected"
                        }`}
                        onClick={() => changeState(show)}
                    >
                        <li className="shows-list-item">
                            <Show data={show} />
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default ShowsList;
