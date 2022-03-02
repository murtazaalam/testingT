import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import EventImage from "../../assets/images/event_icon_demo.svg";
import eventsApi from "../../apis/api/GetEvents";
import "./events.css";
import Loading from "../Loader";

const Events = (props) => {
  const [events, setEventData] = useState();
  const [upcomingTab, setUpcomingTab] = useState(true);
  const [pastTab, setPastTab] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!events) {
      eventsApi(props.category, setEventData, setLoading, setError);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [events]);
  const setEventCategory = (category) => {
    setEventData([]);
    eventsApi(category, setEventData, setLoading, setError);
    if (category === "upcoming") {
      setUpcomingTab(true);
      setPastTab(false);
    } else {
      setUpcomingTab(false);
      setPastTab(true);
    }
  };
  console.log(window.matchMedia("(max-width: 668px)").matches);
  return (
    <>
      <Box
        component="section"
        className="page-heading"
        sx={{
          // background: `url(https://tv-academy-assets.s3.eu-west-2.amazonaws.com/Events.jpg)`,
          background: `#1C477C url(${
            window.matchMedia("(max-width: 668px)").matches
              ? ""
              : "https://tv-academy-assets.s3.eu-west-2.amazonaws.com/Events.jpg"
          }) 0 0 no-repeat`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="course-container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">
                <p className="home">
                  Home
                  <div className="line"></div>
                </p>
              </li>
              <li className="breadcrumb-item active">Events</li>
            </ol>
          </nav>
          <h1 className="event-heading">Events</h1>
        </div>
      </Box>
      {!loading ? (
        <Box component="section" className="courses-area">
          <Box component="div" className="event-aria">
            <Typography component="h3">Events</Typography>
          </Box>
          <Box
            component="div"
            sx={{ display: "flex", paddingTop: "20px" }}
            className="event-body"
          >
            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
              <Box component="div" className="row event-menu">
                <Typography
                  component="h6"
                  style={
                    upcomingTab
                      ? { fontWeight: 800, color: "var(--color-secondary)" }
                      : { fontWeight: 600, color: "black" }
                  }
                  onClick={() => setEventCategory("upcoming")}
                >
                  Upcoming Events
                </Typography>
                <Typography
                  component="h6"
                  style={
                    pastTab
                      ? { fontWeight: 800, color: "var(--color-secondary)" }
                      : { fontWeight: 600, color: "black" }
                  }
                  onClick={() => setEventCategory("past")}
                >
                  Past Events
                </Typography>
              </Box>

              <Box component="h6" className=""></Box>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-6 col-12">
              {events ? (
                events.map((event, index) => {
                  return (
                    <Link to={`/event/${event._id}`} key={event._id}>
                      <Card
                        sx={{ minWidth: 175, minHeight: 320 }}
                        className="event-card-box"
                        key={index}
                      >
                        <CardContent
                          className="event-card"
                          sx={{ height: 200 }}
                        >
                          <img src={EventImage} width="100" alt="" />
                          {/* for dynamic use below code */}
                          {/* <img src={`${event.image}`} width="100"/> */}
                        </CardContent>
                        <CardActions sx={{ flexDirection: "column" }}>
                          <Typography component="h6" className="event-name">
                            {event.name}
                          </Typography>
                          <Typography component="div" className="event-details">
                            <Typography component="p" className="event-date">
                              {event.date}
                            </Typography>
                            <Typography component="p">
                              {event.category === "upcoming" && (
                                <Link
                                  to={`/event/${event._id}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <Button
                                    className="btn-grad btn-design"
                                    size="small"
                                    sx={{ color: "#1c477c" }}
                                  >
                                    Register Now
                                  </Button>
                                </Link>
                              )}
                            </Typography>
                            <Typography component="p">
                              {event.category === "past" && (
                                <Link
                                  to={`/event/${event._id}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <Button
                                    className="btn-grad btn-design"
                                    size="small"
                                    size="small"
                                    sx={{ color: "#1c477c" }}
                                  >
                                    See Detail
                                  </Button>
                                </Link>
                              )}
                            </Typography>
                          </Typography>
                        </CardActions>
                      </Card>
                    </Link>
                  );
                })
              ) : (
                <h1>No Event Available</h1>
              )}
            </div>
          </Box>
        </Box>
      ) : (
        <Loading />
      )}
    </>
  );
};
export default Events;
