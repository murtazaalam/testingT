import React from "react";
import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import "./testQuestion.css";
import getInterviewQuestionsApi from "../../apis/api/InterviewQuestion";
import Loader from "../Loader";

const TestQuestion = () => {
  const [questionList, setQuestionList] = useState("");
  const [subject, setSubject] = useState();
  const [activeTavb, setActiveTab] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getInterviewQuestionsApi(setSubject, setLoading, setActiveTab);
  }, []);

  const changeTab = (id) => {
    setQuestionList(id);
    setActiveTab(id);
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Box
            component="section"
            className="page-heading"
            sx={{
              background: `#1C477C url(${
                window.matchMedia("(max-width: 668px)").matches
                  ? ""
                  : "https://tv-academy-assets.s3.eu-west-2.amazonaws.com/Interview+questions.jpg"
              }) 0 0 no-repeat`,

              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="course-container">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active">
                    Home
                    <div className="line"></div>
                  </li>
                  <li className="breadcrumb-item active">
                    Interview Questions
                  </li>
                </ol>
              </nav>
              <h1 className="event-heading">Interview Questions</h1>
            </div>
          </Box>
          <Box component="section" className="courses-area">
            <Box component="div" className="event-aria">
              <Typography component="h3">Interview Questions</Typography>
            </Box>
            <Box
              component="div"
              sx={{ display: "flex", paddingTop: "20px" }}
              className="event-body"
            >
              <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                <Box component="div" className="row event-menu">
                  {subject &&
                    subject.map((item, index) => {
                      return (
                        <Typography
                          component="h6"
                          data-index={index}
                          onClick={() => changeTab(item._id)}
                          style={
                            activeTavb === item._id
                              ? {
                                  fontWeight: 800,
                                  color: "var(--color-secondary)",
                                }
                              : { fontWeight: 600, color: "black" }
                          }
                        >
                          {item.name}
                        </Typography>
                      );
                    })}
                </Box>
                <Box component="h6" className=""></Box>
              </div>
              {subject &&
              <div className="questions-wrap col-lg-9 col-md-9 col-sm-6 col-12">
                {(subject.length > 0) ? (
                  subject.map((item, index) => {
                    if (!questionList) {
                      if (index === 0) {
                        return (
                          <>
                            {item.list.map((val, i) => {
                              return (
                                <>
                                  <h5>
                                    <span>Ques {i + 1} </span>
                                    {val.question}
                                  </h5>
                                  <p className="interview-answer">
                                    <span>Ans {i + 1} </span>
                                    {val?.answer}
                                  </p>
                                </>
                              );
                            })}
                          </>
                        );
                      }
                    }
                    if (item._id === questionList) {
                      return (
                        <>
                          {item.list.map((val, i) => {
                            return (
                              <>
                                <h5>
                                  <span>Ques {i + 1} </span>
                                  {val.question}
                                </h5>
                                <p className="interview-answer">{val.answer}</p>
                              </>
                            );
                          })}
                        </>
                      );
                    }
                  }))
                 : (
                  <>
                    <h1
                      style={{
                        fontSize: "24px",
                        fontWeight: "600",
                        textAlign: "left",
                      }}
                    >
                      No Questions Available
                    </h1>
                  </>
                )}
              </div>
              }
              {!subject &&
                <h1
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    textAlign: "left",
                  }}
                >
                  No Questions Available
                </h1>
              }
            </Box>
          </Box>
        </>
      )}
    </>
  );
};
export default TestQuestion;
