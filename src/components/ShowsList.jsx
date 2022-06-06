/* COMPONENT IMPORTS */
import React from "react";
import Show from "./Show";
/* STYLES IMPORTS */
import "../styles/ShowsList.sass";
/* STATE MANAGEMENT IMPORTS */
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../app/index";

const ShowsList = () => {
    /* STATE MANAGEMENT */
    const dispatch = useDispatch();
    const { changeSelectionState } = bindActionCreators(
        actionCreators,
        dispatch,
    );
    const shows = useSelector((state) => state);

    /**
     * Handles the selection state of each item on the list.
     * Updates the local storage with the new list for persistence.
     * @returns {void}
     */
    const changeState = (currentItem) => {
        const newItem = currentItem;
        newItem.selected = !currentItem.selected;
        changeSelectionState(newItem);
        localStorage.setItem("schedule", JSON.stringify(shows.showsList.shows));
    };

    return (
        <>
            <div className="filter-container">
                <h3 className="show-list-title">Filter by:</h3>
            </div>
            <div className="shows-container">
                <ul className="shows-list">
                    <h3 className="show-list-title">Available shows</h3>
                    {shows.showsList.shows.map(
                        (show) =>
                            !show.selected && (
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
                            ),
                    )}
                </ul>
                <ul className="shows-list">
                    <h3 className="show-list-title">Selected shows</h3>
                    {shows.showsList.shows.map(
                        (show) =>
                            show.selected && (
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
                            ),
                    )}
                </ul>
            </div>
        </>
    );
};

export default ShowsList;
