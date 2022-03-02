import * as React from "react";
import "./serviceCard.css";
import { Link } from "react-router-dom";
const ServiceCard = (props) => {
  return (
    <div>
      <Link
        to="/coming-soon"
        style={{ color: "var(--color-primary)", textDecoration: "none" }}
      >
        <div className="service">
          <img src={props.icon} alt=""></img>
          <h2>{props.title} </h2>
          <p>{props.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
