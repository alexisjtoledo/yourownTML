import React from "react";
import { ReactComponent as AddIcon } from "../assets/add.svg";
import { ReactComponent as RemoveIcon } from "../assets/remove.svg";

import "../styles/Show.sass";

const Show = ({ data }) => {
    return (
        <div className="show-container">
            <div className="show-information">
                <div className="show-img-container">
                    <img src={data.img} alt={data.name} className="show-img" />
                </div>
                <div className="show-details">
                    <h4 className="show-name">{data.name}</h4>
                    <p className="show-stage">{data.stage}</p>
                    <p className="show-day">{data.day}</p>
                    <p className="show-time">
                        {data.start_time} - {data.end_time}
                    </p>
                </div>
            </div>
            <div className="show-icon-container">
                {!data.selected ? (
                    <AddIcon className="show-add-icon" />
                ) : (
                    <RemoveIcon className="show-remove-icon" />
                )}
            </div>
        </div>
    );
};

export default Show;
