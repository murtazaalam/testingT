import * as React from "react";
import { Container } from "@mui/material";
import Services from "../../data/services/Services";
import logo from "../../assets/images/on-scroll-logo.png";
import "./Footer.css";
import { Link } from "react-router-dom";
import getTopCourseApi from "../../apis/api/TopCourses";
import insta from "../../assets/images/Internship.png";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  "& .MuiAccordionDetails-root": {
    backgroundColor: "#1c477c",
    color: "white",
    border: "none",
  },
  "& .css-ahj2mt-MuiTypography-root": {
    color: "#ea395d !important",
    fontWeight: "bold",
    fontSize: "larger",
  },

  "& .MuiButtonBase-root": {
    width: "100%",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", fill: "white" }} className="arrow-icon" />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#1c477c !important",
  color: "white",
  flexDirection: "row-reverse",

  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    placeContent: "center",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Footer = () => {
  const [topCourses, setTopCourses] = React.useState([]);
  const history = useNavigate();
  React.useEffect(() => {
    getTopCourseApi(setTopCourses);
  }, []);
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleCourse = (id) => {
    history.push(`/courses/${id}`)
  }

  const mobileFooter = (
    <>
      <div>
        {topCourses.length !== 0 && (
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>Top Courses</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {topCourses.map((data, index) => (
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    placeContent: "center",
                  }}
                  to={`/courses/${data._id}`}
                  className="techvanto-footer-text text-small"
                >
                  <p className="techvanto-footer-text text-small">
                    {data.course_name}
                  </p>
                </Link>
              ))}
            </AccordionDetails>
          </Accordion>
        )}
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Services</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {Services.map(
              (data, index) =>
                index <= 6 && (
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                      placeContent: "center",
                    }}
                    to="/coming-soon"
                    className="techvanto-footer-text text-small"
                  >
                    <p>{data.text}</p>
                  </Link>
                )
            )}
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>FAQ</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                placeContent: "center",
              }}
              to="/coming-soon"
              className="techvanto-footer-text text-small"
            >
              <p className="techvanto-footer-text text-small">
                Discussion Forum
              </p>
            </Link>

            <Link
              style={{
                textDecoration: "none",
                color: "white",
                placeContent: "center",
              }}
              to="/blogs"
              className="techvanto-footer-text text-small"
            >
              <p className="techvanto-footer-text text-small">Blog</p>
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                placeContent: "center",
              }}
              to="/coming-soon"
              className="techvanto-footer-text text-small"
            >
              <p className="techvanto-footer-text text-small">
                Reasearch & Project
              </p>
            </Link>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Oppurtunities</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                placeContent: "center",
              }}
              to="/events"
              className="techvanto-footer-text text-small"
            >
              <p className="techvanto-footer-text text-small">
                Upcoming And Past Events
              </p>
            </Link>

            <Link
              style={{
                textDecoration: "none",
                color: "white",
                placeContent: "center",
              }}
              to="/#campusAmbassador"
              className="techvanto-footer-text text-small"
            >
              <p className="techvanto-footer-text text-small">
                Campus Ambassador
              </p>
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                placeContent: "center",
              }}
              to="/coming-soon"
              className="techvanto-footer-text text-small"
            >
              <p className="techvanto-footer-text text-small">Carrer/ Jobs</p>
            </Link>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Contact Us</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                placeContent: "center",
              }}
              to="/contact-us-for-hiring"
              className="techvanto-footer-text text-small"
            >
              <p className="techvanto-footer-text text-small">Hire With Us</p>
            </Link>

            <Link
              style={{
                textDecoration: "none",
                color: "white",
                placeContent: "center",
              }}
              to="/contact-us-to-get-hired"
              className="techvanto-footer-text text-small"
            >
              <p className="techvanto-footer-text text-small">Get Hired</p>
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                placeContent: "center",
              }}
              to="/coming-soon"
              className="techvanto-footer-text text-small"
            >
              <p className="techvanto-footer-text text-small">
                {" "}
                Train Your Team
              </p>
            </Link>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Contact</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <p className="text-small" style={{ placeContent: "center" }}>
                R7, 3rd floor, MG Road, Ghitorni, New Delhi 110030
              </p>

              {/* <PermContactCalendarIcon></PermContactCalendarIcon> */}
              <p className="text-small" style={{ placeContent: "center" }}>
                +91-9646206032
              </p>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
  return (
    <section className="techvanto-footer">
      <section className="techvant-footer-upper-part">
        <br />
        <br />

        <Container className="maxWidthNone">
          <div className="techvanto-footer-grid">
            <div style={{ height: "106px" }} className="social-icons">
              <div className="techvanto-footer-text-header color">
                <img src={logo} alt="" />{" "}
              </div>
              <div className="text-small techvanto-footer-text-header follow-links">
                <p className="social">
                  <Link
                    rel="noopener noreferrer"
                    to="https://www.facebook.com/techvantoacademy/"
                    className="social-link icon-link-padding"
                    target="_blank"
                    style={{ color: "red" }}
                  >
                    <svg
                      className="svg-icon "
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 200 200"
                      fill="#0251A0"
                    >
                      <path d="M148 45h-18.47c-7.36 0-8.89 3-8.89 10.64v16.75H148l-2.86 27.36h-24.5v95.75h-41V99.75H52.25V72.39h27.36V40.82C79.61 16.63 92.34 4 121 4h27Z" />
                    </svg>
                  </Link>
                  <Link
                    rel="noopener noreferrer"
                    to="https://twitter.com/TechvantoA?t=AZr-Uor2sg4-L2vvynXk4A&s=08"
                    className="social-link icon-link-padding"
                    target="_blank"
                  >
                    <svg
                      className="svg-icon "
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 200 200"
                      fill="#0A7BEC"
                    >
                      <path d="M197.41 39.58a79.67 79.67 0 0 1-23 6.29A40 40 0 0 0 192 23.76a80 80 0 0 1-25.39 9.7 40 40 0 0 0-68.08 36.45 113.51 113.51 0 0 1-82.38-41.76 40 40 0 0 0 12.37 53.37 39.88 39.88 0 0 1-18.1-5 40 40 0 0 0 32.06 39.69 40 40 0 0 1-18 .68 40 40 0 0 0 37.34 27.76 80.41 80.41 0 0 1-59.23 16.56 113.14 113.14 0 0 0 61.27 17.95c74.21 0 116.14-62.67 113.6-118.89a81.42 81.42 0 0 0 19.95-20.69Z" />
                    </svg>
                  </Link>
                  <Link
                    rel="noopener noreferrer"
                    to="https://www.linkedin.com/company/techvantoacademy"
                    className="social-link icon-link-padding"
                    target="_blank"
                  >
                    <svg
                      className="svg-icon "
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 200 200"
                      fill="#1479DE"
                    >
                      <path d="M47.65 194.5H11.76V62.88h35.89ZM29.71 47.71a21.11 21.11 0 1 1 20.93-21.1 21 21 0 0 1-20.93 21.1ZM191.23 194.5h-35.89v-67c0-40.3-47.86-37.25-47.86 0v67h-35.9V62.88h35.9V84c16.7-30.94 83.75-33.22 83.75 29.63Z" />
                    </svg>
                  </Link>
                  <Link
                    rel="noopener noreferrer"
                    to="https://instagram.com/techvanto.academy?utm_medium=copy_link"
                    className="social-link icon-link-padding"
                    target="_blank"
                  >
                    <img
                      src={insta}
                      alt=""
                      style={{ bottom: "6px", width: "28px" }}
                    />
                  </Link>
                </p>
              </div>
            </div>
            {window.matchMedia("(max-width: 700px)").matches ? (
              mobileFooter
            ) : (
              <div
                className={`footer-right-content ${
                  topCourses.length !== 0 ? "fr4" : "fr3"
                }`}
              >
                {topCourses.length !== 0 && (
                  <div style={{ height: "-webkit-fill-available" }}>
                    <div className="techvanto-footer-text-header color">
                      Top Courses{" "}
                    </div>
                    <div>
                      {topCourses.map((data, index) => (
                        <Link
                          style={{ textDecoration: "none", color: "white" }}
                          to={`/courses/${data._id}`}
                          className="techvanto-footer-text text-small"
                          key={index}
                          onClick={() => handleCourse(data._id)}
                        >
                          <p className="techvanto-footer-text text-small">
                            {data.course_name}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <div style={{ height: "-webkit-fill-available" }}>
                  <div className="techvanto-footer-text-header color">
                    Services{" "}
                  </div>
                  {Services.map(
                    (data, index) =>
                      index <= 6 && (
                        <Link
                          style={{ textDecoration: "none", color: "white" }}
                          to="/coming-soon"
                          className="techvanto-footer-text text-small"
                        >
                          <p>{data.text}</p>
                        </Link>
                      )
                  )}
                </div>

                <div style={{ height: "-webkit-fill-available" }}>
                  <div className="techvanto-footer-text-header color ">
                    FAQ{" "}
                  </div>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/coming-soon"
                    className="techvanto-footer-text text-small"
                  >
                    <p className="techvanto-footer-text text-small">
                      Discussion Forum
                    </p>
                  </Link>

                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/blogs"
                    className="techvanto-footer-text text-small"
                  >
                    <p className="techvanto-footer-text text-small">Blog</p>
                  </Link>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/coming-soon"
                    className="techvanto-footer-text text-small"
                  >
                    <p className="techvanto-footer-text text-small">
                      Reasearch & Project
                    </p>
                  </Link>

                  <div className="techvanto-footer-text-header color">
                    Oppurtunities{" "}
                  </div>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/events"
                    className="techvanto-footer-text text-small"
                  >
                    <p className="techvanto-footer-text text-small">
                      Upcoming And Past Events
                    </p>
                  </Link>
                  <Link
                    to="/#campusAmbassador"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <p className="techvanto-footer-text text-small">
                      Campus Ambassador
                    </p>{" "}
                  </Link>
                  <Link
                    to="/coming-soon"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <p className="techvanto-footer-text text-small">
                      Carrer/ Jobs
                    </p>
                  </Link>
                </div>
                <div style={{ height: "-webkit-fill-available" }}>
                  <div className="techvanto-footer-text-header color">
                    Contact Us
                  </div>
                  <Link
                    to="/contact-us-for-hiring"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <p className="techvanto-footer-text text-small">
                      Hire With Us
                    </p>
                  </Link>
                  <Link
                    to="/contact-us-to-get-hired"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <p className="techvanto-footer-text text-small">
                      Get Hired
                    </p>
                  </Link>
                  <Link
                    to="/coming-soon"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <p className="techvanto-footer-text text-small">
                      Train Your Team
                    </p>
                  </Link>

                  <div className="techvanto-footer-text-header color">
                    Contact{" "}
                  </div>
                  <div className="techvanto-footer-text">
                    {/* <PermContactCalendarIcon></PermContactCalendarIcon> */}
                    <p className="text-small">
                      R7, 3rd floor, MG Road, Ghitorni, New Delhi 110030
                    </p>
                  </div>
                  <div className="techvanto-footer-text">
                    {/* <PermContactCalendarIcon></PermContactCalendarIcon> */}
                    <p className="text-small">+91-9646206032</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Container>
        <br />
        <br />
      </section>
      <section className="techvanto-footer-lower-part">
        <section className="techvanto-footer-policies">
          <Container className="techvanto-policies">
            <div className="text-small" style={{ marginTop: "1rem" }}>
              Policies
            </div>
            <div
              className="text-small"
            >
              <div className="lower-footer">
                <Link to="/terms-and-conditions" style={{ color: "white" }} className="text-small t-margin">
                  <span>Terms & Conditions </span>
                </Link>
                /
                <Link to="/privacy-policy" style={{ color: "white" }} className="text-small pp-margin">
                  <span>Privacy Policy </span>
                </Link>
                /
                <Link to="/placement-policy" style={{ color: "white" }} className="text-small pp-margin">
                  <span>Placement Policy </span>
                </Link>
                /
                <Link to="/payment-policy" style={{ color: "white" }} className="text-small p-margin">
                  <span>Payment Policy </span>
                </Link>
              </div>
            </div>
          </Container>
          {/* <section className="techvanto-footer-copyright"> */}
          {/* <CopyrightIcon /> */}
          {/* </section> */}
        </section>
      </section>
    </section>
  );
};

export default Footer;
