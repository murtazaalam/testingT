import * as React from "react";
import { Typography, Container } from "@mui/material";
import "./WhatAndWhyWeDo.css";
import WhatAndWhyList from "./WhatAndWhyWeDoList/WhatAndWhyWeDoList";
import question from "../../assets/Svgs/WhatWeDo1.svg";
import question2 from "../../assets/Svgs/WhatWeDo2.svg";
const WhatAndWhyWeDo = () => {
  return (
    <section>
      <Container>
        <div className="display-grid fr2 techvanto-what-why-item techvanto-why-grid display-on-small-screen">
          <img src={question} alt="" />
          <div>
            <Typography component="div" className="techvanto-whyus">
              <Typography component="h2" className="techvanto-whyus-heading">
                What We Do?
              </Typography>
            </Typography>
            <div className="techvanto-grid-column text-medium">
              <WhatAndWhyList text="what" />
            </div>
          </div>

          <div>
            <Typography component="div" className="techvanto-whyus ">
              <Typography component="h2" className="techvanto-whyus-heading">
                Why We Do?
              </Typography>
            </Typography>
            <div className="techvanto-why-we-do">
              <WhatAndWhyList text="why" />
            </div>
          </div>
          <img src={question2} alt="" />
        </div>
      </Container>
    </section>
  );
};

export default WhatAndWhyWeDo;
