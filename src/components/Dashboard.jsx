import React from "react";
import Show from "../components/Show";
import "../styles/Dashboard.sass";
import { useSelector } from "react-redux";

const Dashboard = () => {
    const shows = useSelector((state) => state);
    return (
        <div className="dashboard-container">
            <div
                className="time"
                style={{ gridColumnStart: 1, gridColumnEnd: 6 }}
            >
                12:00
            </div>
            <div
                className="time"
                style={{ gridColumnStart: 6, gridColumnEnd: 12 }}
            >
                13:00
            </div>
            <div
                className="time"
                style={{ gridColumnStart: 12, gridColumnEnd: 18 }}
            >
                14:00
            </div>
            <div
                className="time"
                style={{ gridColumnStart: 18, gridColumnEnd: 24 }}
            >
                15:00
            </div>
            <div
                className="time"
                style={{ gridColumnStart: 24, gridColumnEnd: 30 }}
            >
                16:00
            </div>
            <div
                className="time"
                style={{ gridColumnStart: 30, gridColumnEnd: 36 }}
            >
                17:00
            </div>
            <div
                className="time"
                style={{ gridColumnStart: 36, gridColumnEnd: 42 }}
            >
                18:00
            </div>
            <div
                className="time"
                style={{ gridColumnStart: 42, gridColumnEnd: 48 }}
            >
                19:00
            </div>
            <div
                className="time"
                style={{ gridColumnStart: 48, gridColumnEnd: 54 }}
            >
                20:00
            </div>
            <div
                className="time"
                style={{ gridColumnStart: 54, gridColumnEnd: 60 }}
            >
                21:00
            </div>
            <div
                className="time"
                style={{ gridColumnStart: 60, gridColumnEnd: 66 }}
            >
                22:00
            </div>
            <div
                className="time"
                style={{ gridColumnStart: 66, gridColumnEnd: 72 }}
            >
                23:00
            </div>
            <div
                className="time"
                style={{ gridColumnStart: 72, gridColumnEnd: 78 }}
            >
                00:00
            </div>
            <div className="time" style={{ gridColumnStart: 78 }}>
                01:00
            </div>

            {shows.showsList.shows.map(
                (show) =>
                    show.selected && (
                        <div
                            key={show.id}
                            className={`shows-list-item-container ${
                                show.selected && "selected"
                            }`}
                            style={{
                                gridColumnStart: show.start_value,
                                gridColumnEnd: show.end_value,
                                gridRow: show.day_value + 1,
                            }}
                        >
                            <li className="shows-list-item">
                                <Show data={show} />
                            </li>
                        </div>
                    ),
            )}
        </div>
    );
};

export default Dashboard;
