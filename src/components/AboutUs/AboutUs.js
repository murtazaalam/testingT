/* eslint-disable no-lone-blocks */
import React from "react";
import { Typography } from "@mui/material";
import "./AboutUs.css";
const AboutUs = (props) => {
  //const [value, setValue] = useState(0);

  return (
    <section>
      <Typography component="div" className="techvanto-whyus ">
        <Typography component="h2" className="techvanto-whyus-heading">
          Partnerships with top universities to make{" "}
          <span style={{ color: "#ea395d" }}>WORLD-CLASS EDUCATION</span>{" "}
          accessible globally.
        </Typography>
      </Typography>
    </section>
  );
};

export default AboutUs;
