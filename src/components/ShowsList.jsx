/* COMPONENT IMPORTS */
import React, { useEffect, useState } from "react";
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

    /* LOCAL STATES */
    const [filteredShows, setFilteredShows] = useState(shows.showsList.shows);
    const [inputQuery, setInputQuery] = useState("");
    const [stageSelector, setStageSelector] = useState("default");
    const [daySelector, setDaySelector] = useState("0");

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

    const normalizeString = (string) => {
        return string.toLowerCase();
    };

    useEffect(() => {
        const handleNameFilter = (query) => {
            // setStageSelector("default");
            // setDaySelector("0");
            let normalizedQueryValue = query.toLowerCase();
            let newList;
            newList = shows.showsList.shows.filter((show) => {
                let normalizedName = normalizeString(show.name);
                return normalizedName.indexOf(normalizedQueryValue) > -1;
            });
            setFilteredShows(newList);
        };

        handleNameFilter(inputQuery);
    }, [inputQuery, shows]);

    useEffect(() => {
        const handleStageFilter = (stage) => {
            // setInputQuery("");
            // setDaySelector("0");
            if (stage !== "default") {
                let newList;
                newList = shows.showsList.shows.filter((show) => {
                    return show.stage.indexOf(stage) > -1;
                });
                setFilteredShows(newList);
            } else {
                setFilteredShows(shows.showsList.shows);
            }
        };

        handleStageFilter(stageSelector);
    }, [stageSelector, shows]);

    useEffect(() => {
        const handleDayFilter = (day) => {
            let parsedValue = parseInt(day);

            if (parsedValue !== 0) {
                let newList;
                newList = shows.showsList.shows.filter((show) => {
                    return show.day_value === parsedValue;
                });
                setFilteredShows(newList);
            } else {
                setFilteredShows(shows.showsList.shows);
            }
        };

        handleDayFilter(daySelector);
    }, [daySelector, shows]);

    const resetFilters = () => {
        setInputQuery("");
        setStageSelector("default");
        setDaySelector("0");
    };

    return (
        <>
            <div className="filter-container">
                <h3 className="show-list-title">Search by:</h3>
                <div className="filter-input-container">
                    <label for="name-input" className="filter-label">
                        Name:
                    </label>
                    <input
                        id="name-input"
                        type="text"
                        onChange={(e) => setInputQuery(e.target.value)}
                        onClick={resetFilters}
                        className="filter-input-box"
                        value={inputQuery}
                    />
                </div>
                <div className="filter-dropdown-container">
                    <label for="stage-selector" className="filter-label">
                        Stage:
                    </label>
                    <select
                        className="filter-dropdown-box"
                        onChange={(e) => setStageSelector(e.target.value)}
                        onClick={resetFilters}
                        value={stageSelector}
                        id="stage-selector"
                    >
                        <option value="default">All</option>
                        <option value="mainstage">Mainstage</option>
                        <option value="freedom">Freedom</option>
                        <option value="rose garden">Rose Garden</option>
                        <option value="harbour house">Harbour House</option>
                        <option value="youphoria">Youphoria</option>
                        <option value="cage">Cage</option>
                        <option value="leaf">Leaf</option>
                        <option value="the rave cave">The Rave Cave</option>
                        <option value="crystal garden">Crystal Garden</option>
                        <option value="kara savi">Kara Savi</option>
                        <option value="core">Core</option>
                        <option value="atmosphere">Atmosphere</option>
                        <option value="the library">The Library</option>
                        <option value="moosebar">Moosebar</option>
                    </select>
                </div>
                <div className="filter-dropdown-container">
                    <label for="day-selector" className="filter-label">
                        Day:
                    </label>
                    <select
                        id="day-selector"
                        className="filter-dropdown-box"
                        value={daySelector}
                        onChange={(e) => setDaySelector(e.target.value)}
                        onClick={resetFilters}
                    >
                        <option value="0">All</option>
                        <option value="1">Day 1</option>
                        <option value="2">Day 2</option>
                        <option value="3">Day 3</option>
                    </select>
                </div>
            </div>
            <div className="shows-container">
                <ul className="shows-list">
                    <h3 className="show-list-title">Available shows</h3>
                    {filteredShows.map(
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
