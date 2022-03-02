import React from "react";
import { Container } from "@mui/material";
import BasicModal from "../basicModal/BasicModal";
import "./contentHeaderImage.css";

const ContentHeaderImage = (props) => {
  return (
    <div
      className="techvanto-content-header-image"
      style={{ background: `#1C477C url(${props.background}) 0 0 no-repeat` }}
    >
      <Container>
        <div className="techvanto-header-content">
          <p className="techvanto-campus-ambassador-right-content header-text">
            <span className="large-text">{props.title}</span>
            <div style={{ lineHeight: "normal" }} className="small-heading">
              <span className="small-text">{props.overview} </span>
              <br />
            </div>
            <br />
            <div>
              <BasicModal
                text="Book Demo ►"
                name="Home"
                sx={{ color: "white" }}
              ></BasicModal>
            </div>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default ContentHeaderImage;
