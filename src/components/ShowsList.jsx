import React from "react";
import Show from "./Show";
import "../styles/ShowsList.sass";

import { useSelector } from "react-redux";

const ShowsList = () => {
    /* REDUX STATE */
    const shows = useSelector((state) => state.showsList.shows);

    return (
        <div className="shows-container">
            <ul className="shows-list">
                {shows.week_1.map((show) => (
                    <label key={show.id} className="shows-list-item-container">
                        <li className="shows-list-item">
                            <Show data={show} />
                        </li>
                        <input
                            type="checkbox"
                            name=""
                            id=""
                            className="show-checkbox"
                        />
                    </label>
                ))}
            </ul>
        </div>
    );
};

export default ShowsList;
