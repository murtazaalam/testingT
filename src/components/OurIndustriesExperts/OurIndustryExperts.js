/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import ExpertCard from "./ExpertCard/ExpertCard";
import { Typography, Container } from "@mui/material";
import AliceCarousel from "react-alice-carousel";
//import "./StudentSays.css";
import expert1 from "../../assets/images/experts/expert5.jpg";
import expert2 from "../../assets/images/experts/expert4.jpg";
import expert3 from "../../assets/images/experts/expert6.jpg";
import expert4 from "../../assets/images/experts/expert2.jpg";
import expert5 from "../../assets/images/experts/expert1.jpg";
import expert6 from "../../assets/images/experts/expert3.jpg";
import expert7 from "../../assets/images/experts/expert7.jpg";
import expert8 from "../../assets/images/experts/expert8.png";
const responsive = {
  400: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};
const OurIndustryExperts = (props) => {
  //const [studentSays, setStudentSays] = React.useState([]);
  const itemData = [
    {
      pic: expert1,
      title1: "Sr. Full Stack Developer",
      title2: "Verizon Data Service",
      author: "Deepa Paikar",
    },
    {
      pic: expert2,
      title1: "Software Engineer",
      title2: "Salesforce",
      author: "Anoosha Chandra",
    },
    {
      pic: expert3,
      title1: "Sr. Mechanical Engineer",
      title2: "Mercedes-Benz",
      author: "Ashish Jha",
    },
    {
      pic: expert4,
      title1: "Sr. IOS Developer",
      title2: "GetMySlice",
      author: "Rahul Saini",
    },
    {
      pic: expert5,
      title1: "Software Engineer",
      title2: "Bharat Airtel",
      author: "Himanshu Singhal",
    },
    {
      pic: expert6,
      title1: "Angular Developer",
      title2: "Trainman",
      author: "Rishabh",
    },
    {
      pic: expert7,
      title1: "Cyber Forensic Expert",
      title2: "Linearstack",
      author: "Ankit Bishnoi",
    },
    {
      pic: expert8,
      title1: "Sr. Java Developer",
      title2: " Delhivery",
      author: "Pawan Chandraval",
    },
  ];

  let items = itemData.map((data, index) => (
    <ExpertCard data={data} key={index}></ExpertCard>
  ));

  return (
    <Container style={{ maxWidth: "1200px" }}>
      <div className="techvanto-student-says">
        <Typography component="div" className="techvanto-whyus ">
          <Typography component="h2" className="techvanto-whyus-heading">
            Our Industry Experts
          </Typography>
        </Typography>
        <AliceCarousel
          className="techvanto-student-says-carousel"
          responsive={responsive}
          autoPlayDirection={"rtl"}
          autoPlayStrategy={"none"}
          // disableButtonsControls={true}
          animationEasingFunction={"ease"}
          autoPlay={false}
          controlsStrategy="alternate"
          infinite={true}
          mouseTracking
          items={items}
          renderPrevButton={() => {
            return <div className="left-arrow-studentSays">◄</div>;
          }}
          renderNextButton={() => {
            return <div className="right-arrow-studentSays">►</div>;
          }}
        />
      </div>
    </Container>
  );
};

export default OurIndustryExperts;

// <ImageListItem sx={{ width: 400, height: 400 }}>
//   <img
//     className="item"
//     data-value={index + 1}
//     src={`${r(item).default}?w=248&fit=crop&auto=format`}
//     onDragStart={handleDragStart}
//     alt=""
//     key={index}
//   />
//   <ImageListItemBar
//     title={itemData[index].title}
//     subtitle={<span>{itemData[index].author}</span>}
//     actionIcon={
//       <IconButton
//         sx={{ color: "rgba(255, 255, 255, 0.54)" }}
//         aria-label={`info about ${item.title}`}
//       ></IconButton>
//     }
//   />
// </ImageListItem>
