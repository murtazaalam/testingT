import * as React from "react";
import { Typography } from "@mui/material";
import image_1 from "../../assets/images/success-story-cyber-security.jpg";
import image_2 from "../../assets/images/success-story-bridge-design.jpg";
import image_3 from "../../assets/images/success-story-hackathon.jpg";
import image_4 from "../../assets/images/success-story-machine-learning.jpg";
import "./sliderr.css";
const Sliderr = () => {
  const [totalSlide] = React.useState(6);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const handleArrow = (counter) => {
    var newSlide = currentSlide + counter;
    if (newSlide === totalSlide) newSlide = 0;
    if (newSlide === -1) newSlide = totalSlide - 1;
    setCurrentSlide(newSlide);
  };

  const imageObject = [
    {
      url: image_1,
      date: "1-2 Feb 2020",
      name: "Cyber Security",
      place: "IIT, Bhubaneswar",
      details:
        "The instructor for the Cyber Security course was a patient and adept mentor. He proactively resolved my queries and rendered respectful guidance when interacting with other students.",
    },
    {
      url: image_2,
      date: "1-2 Feb 2020",
      name: "Bridge Design",
      place: "IIT, Bhubaneswar",
      details:
        "The content for the Bridge Design Course was really informative and relevant. Working on projects with the use of tools provided helped me get acquainted with technology in a learning environment with ease.",
    },
    {
      url: image_3,
      date: "5 Nov 2021",
      name: "Hackathon",
      place: "LPU",
      details:
        "Learning from the Hackathon was truly an enriching experience. The way the course component was delivered exceeded my expectations.",
    },
    {
      url: image_4,
      date: "6 Dec 2021",
      name: "Machine Learning",
      place: "Osmania University",
      details:
        "The machine learning workshop helped me in two ways-by exposing me to challenging tasks in the form of real-world projects and extending professional development opportunities. I strongly recommend this workshop.",
    },
  ];

  return (
    <div className="slider-div">
      <div className="story-heading">
        <Typography
          component="h2"
          className="techvanto-whyus-heading story-text"
        >
          Success Stories
        </Typography>
        <div className="arrow-button">
          <div className="left-arrow" onClick={() => handleArrow(-1)}>
            ◄
          </div>
          <div className="right-arrow" onClick={() => handleArrow(1)}>
            ►
          </div>
        </div>
      </div>
      {imageObject.map((data, index) => {
        return (
          <>
            <div
              className={
                "slide none " +
                (currentSlide === index ? "main-slide" : "") +
                (currentSlide === (index - 1 + totalSlide) % totalSlide
                  ? "right-slide "
                  : "") +
                (currentSlide === (index + 1) % totalSlide ? "left-slide " : "")
              }
            >
              <img
                src={`${data.url}`}
                width="100%"
                height="100%"
                className="active-image"
                alt=""
              ></img>
              {currentSlide === index ? (
                <p
                  className={
                    "techvanto-stories-upper-text" +
                    (currentSlide !== index ? "none" : "")
                  }
                >
                  {data.date && (
                    <>
                      <span className="date">{data.date}</span>
                      <br></br>
                    </>
                  )}
                  <span className="place">
                    {data.name} - {data.place}
                  </span>
                </p>
              ) : (
                ""
              )}
            </div>
          </>
        );
      })}
    </div>
  );
};
export default Sliderr;
