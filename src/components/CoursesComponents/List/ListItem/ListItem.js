import { Link } from "@mui/material";
import React from "react";
import "./ListItem.css";

const ListItem = ({
  item: { coverSrc, title, price, serviceTime, rating, myCourseCheck },
}) => (
  <div className="listItem-wrap">
    <img
      src="https://image.freepik.com/free-photo/man-using-digital-tablet-psd-mockup-smart-technology_53876-110815.jpg?w=1380"
      alt=""
    />
    <header>
      <h4>{title}</h4>
      <span>🌟{rating}</span>
    </header>
    <footer>
      <p>
        <b>{serviceTime}</b>
      </p>
      {myCourseCheck ? (
        <p>
          <Link style={{ textDecoration: "none" }}> View Details</Link>
        </p>
      ) : (
        <p>
          <b>${price}</b>
        </p>
      )}
    </footer>
  </div>
);

export default ListItem;
