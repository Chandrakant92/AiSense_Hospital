import React from "react";
// import "./course.css";
import { NavLink } from "react-router-dom";
const Cards = (props) => {

  return (
    <>
      {/* <NavLink style={{ textDecoration: "none", }} to={`/courseInfo/${props.name}`}> */}
        <div className="card">
          <img className="poster"
            src="https://www.shutterstock.com/image-vector/people-interact-computers-online-applications-260nw-1505290934.jpg"
            alt=""
          />
          <p className="title">{props.name}</p>
          <div className="courseinfo">
            <p className="duration">{props.duration}</p>
            <p className="intake">{props.fees}</p>

          </div>
        </div>
      {/* </NavLink> */}

    </>
  );
};

export default Cards;
