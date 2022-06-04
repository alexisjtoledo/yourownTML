import React from "react";
import "../styles/Show.sass";

const Show = ({ data }) => {
    return (
        <div className="show-container">
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
    );
};

export default Show;
