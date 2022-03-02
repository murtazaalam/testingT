/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import StudentCard from "./StudentCard/StudentCard";
import { Typography, Container } from "@mui/material";
import AliceCarousel from "react-alice-carousel";
import "./StudentSays.css";
//import StudentSays from "../../Core/api/services/StudentSays";
import feed1 from "../../assets/images/studentsImages/feedback1.jpg";
import feed2 from "../../assets/images/studentsImages/feedback2.jpg";
import feed3 from "../../assets/images/studentsImages/feedback3.jpeg";
import feed4 from "../../assets/images/studentsImages/feedback4.jpg";
import feed5 from "../../assets/images/studentsImages/feedback5.jpeg";
import feed6 from "../../assets/images/studentsImages/feedback6.jpeg";
import feed7 from "../../assets/images/studentsImages/feedback7.jpg";
import feed8 from "../../assets/images/studentsImages/feedback8.JPG";
import feed9 from "../../assets/images/studentsImages/feedback9.jpg";
import feed10 from "../../assets/images/studentsImages/feedback10.jpg";
import feed11 from "../../assets/images/studentsImages/feedback11.jpg";
import feed12 from "../../assets/images/studentsImages/feedback12.png";
//const handleDragStart = (e) => e.preventDefault();
const responsive = {
  400: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};
const WhatOurStudentSays = (props) => {
  //const [studentSays, setStudentSays] = React.useState([]);
  const studentSays = [
    {
      pic: feed1,
      title: "Siva Teja Pottella",
      destination: "Java",
      overview:
        "The instructor was very articulate and just knew what and how to teach. The course material was quite relevant and rich with a good mix of projects and assignments.",
    },
    {
      pic: feed2,
      title: "Rushali Kashyap",
      destination: "Android Developmen",
      overview:
        "I was looking for a course that could transform my interest in Android Development into educational and professional advancement. With Techvanto Academy’s certification course, I got exactly what I was looking for!",
    },
    {
      pic: feed3,
      title: "John Junior",
      destination: "Cyber Forensics",
      overview:
        "Considering my needs and experience, every class was so frictionless that it left me super-pumped up for the next one.",
    },
    {
      pic: feed4,
      title: "Vishal Goyal",
      destination: "Node",
      overview:
        "I really appreciate the self-paced, comprehensive structure of the course since I was able to pursue it alongside my work schedule.",
    },
    {
      pic: feed5,
      title: "Rudra Prasada Rao",
      destination: "VLSI",
      overview:
        "I enrolled in the VLSI training that helped me build my technical skills, gain knowledge and grow in this field. It was well suited for me even as a complete beginner in the field.",
    },
    {
      pic: feed6,
      title: "Yalamati Jnana Sahiti",
      destination: "VLSI",
      overview:
        "I loved the flow of the VLSI training course, whatever was taught in the lectures was evaluated in projects and assignments.",
    },
    {
      pic: feed7,
      title: "Akshita Saini",
      destination: "Cyber Forensics",
      overview:
        "For a beginner like me, Techvanto Academy's courses are an absolute treat with easy-to-understand modules and apt expert guidance. I recently enrolled in the Cyber Security course  pursuing the Cyber Forensics course.",
    },
    {
      pic: feed8,
      title: "Gunduka Srinivas",
      destination: "Full Stack Development",
      overview:
        "I have browsed several courses on Full Stack Web Development. However, Techvanto Academy’s Full Stack Web Dev course struck me differently with an experienced and humble instructor who provided valuable additional inputs during the course.",
    },
    {
      pic: feed9,
      title: "Sai Kumar",
      destination: "Python",
      overview:
        "The Python Programming course transformed me from an amateur in programming to someone who is able to program with ease. Thanks to the wonderful instructor.",
    },
    {
      pic: feed10,
      title: "Anjali Sharma",
      destination: "Anjali Sharma",
      overview:
        "My experience with the course was amazing. Well-structured course, expert guidance and practical knowledge-I found everything to the point.",
    },
    {
      pic: feed11,
      title: "Krishna Vardhan",
      destination: "Python",
      overview:
        "I got a perfect head-start to my career after I attended one of Techvanto Academy’s training programs on Python. I would recommend it to anyone who is figuring out how to get into the field of programming.",
    },
    {
      pic: feed12,
      title: "Abhilash Sathavelly",
      destination: "VLSI",
      overview:
        "The VLSI Course is a very hands-on course, there was no dawdle at all. Highly recommended for all fellow students.",
    },
  ];
  // React.useEffect(() => {
  //   StudentSays(props.name, setStudentSays);
  // }, []);
  let items = studentSays.map((data, index) => (
    <StudentCard data={data} key={index}></StudentCard>
  ));
  // let students =[<StudentCard></StudentCard>,<StudentCard></StudentCard>,<StudentCard></StudentCard>,<StudentCard></StudentCard>,<StudentCard></StudentCard>,<StudentCard></StudentCard>];
  return (
    <Container style={{ maxWidth: "1200px" }}>
      <div className="techvanto-student-says">
        <Typography component="div" className="techvanto-whyus ">
          <Typography component="h2" className="techvanto-whyus-heading">
            What our students says about us?
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

export default WhatOurStudentSays;
