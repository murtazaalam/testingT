import * as React from "react";
import "./CampusAmbassador.css";
import "mui-player/dist/mui-player.min.css";
import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
const CampusAmbassador = () => {
  
  return (
    <div className="background" id="campusAmbassador">
      <Container className="section-spacing">
        <section>
          <div
            className="techvanto-campus-ambassador campus-ambs-aria"
            style={{ placeContent: "center" }}
          >
            <div className="techvanto-campus-ambassador-left">
              <div className="techvanto-campus-ambassador-left-image">
                <div>
                  <iframe
                    title="techvanto"
                    className="techvanto-video"
                    style={{ borderRadius: "21px" }}
                    src="https://www.youtube.com/embed/HH8us39zlYs?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="techvanto-campus-ambassador-right">
              <p className="techvanto-campus-ambassador-right-content">
                <div style={{ lineHeight: "normal" }}>
                  <span className="text-small">
                    Techvanto Academy’s Campus Ambassador program{" "}
                  </span>
                  <br />
                  <span className="text-small">
                    scours the most committed learners to relay our dream of
                    upgrading the academic and professional abilities of
                    hundreds like them. through college campus events, meet-ups,
                    online forums, and other channels.
                  </span>
                  <br />
                </div>
                <span className="text-large">Campus Ambassador</span>
                <br />
                <Button style={{ textTransform: "capitalise" }}>
                  <Link to="/coming-soon">Know More</Link>
                </Button>
              </p>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default CampusAmbassador;
