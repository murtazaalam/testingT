import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import Chip from "@mui/material/Chip";
import "./CourseCard.css";

export default function CourseCard({
  id,
  title,
  pic,
  gradient,
  price,
  discount,
  rating,
  fromMycourse,
}) {
  return (
    <Link to={`/courses/${id}`} style={{ textDecoration: "none" }}>
      <Card sx={{ width: "340px" }} className="technovanto-course-card">
        <div
          style={{
            background: `linear-gradient(${gradient})`,
            height: "194px",
          }}
        >
          <CardMedia
            component="div"
            className="techvanto-all-course-image"
            width="100%"
            height="194"
            style={{ backgroundImage: `url("${pic}")`, height: "194px" }}
          />
        </div>
        <CardContent
          style={{ borderBottom: "1px solid #d0d9df" }}
          className="card-title"
        >
          <Typography variant="body2" color="text.secondary">
            {title}{" "}
            {/* <span style={{ float: "right" }}>Rs.{price - discount}</span>
            </Chip> */}
          </Typography>
          <Chip
            label={`Rs ${price}`}
            style={{ float: "right", background: "#f1effe" }}
          />
        </CardContent>
        <div
          style={{
            display: "flex",
          }}
        >
          <Rating
            name="size-small"
            // defaultValue={1}
            value={rating}
            precision={0.1}
            readOnly
            size={"small"}
            style={{ paddingTop: "0.5rem", left: 5 }}
          />
          {/* <span className="technovanto-course-card-review">
            <b>{Math.round(avarageRating * 10) / 10}</b> (
            {review ? review.length : 0} reviews)
          </span> */}
        </div>
      </Card>
    </Link>
  );
}
