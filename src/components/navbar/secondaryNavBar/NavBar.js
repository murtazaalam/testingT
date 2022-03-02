import * as React from "react";
import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import AppBar from "@mui/material/AppBar";
import { Container, Typography, Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Draggable from "react-draggable";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PrimaryNavBar from "../primaryNavBar/PrimaryNavBar";
// import logo from "../../../assets/images/logo-print-hd-transparent-removebg-preview.png";
import logoOnScroll from "../../../assets/images/on-scroll-logo.png";
import SchoolIcon from "../../../assets/images/new-course-icon-school.svg";
import IntermediateIcon from "../../../assets/images/new-course-icon-intermediate.svg";
import CollegeIconIcon from "../../../assets/images/new-course-icon-college.svg";
import AllCourseApi from "../../../apis/api/AllCourse";
import getFromCartApi from "../../../apis/api/GetFromCart";
import "./navBar.css";
import Login from "../../Login/Login";
import { cartItemList, userAuth } from "../../../recoil/store";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";

import Paper from "@mui/material/Paper";
import { logoutAction } from "../../../redux/slices/auth.slices";
function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const NavBar = (props) => {
  const [scroll, setScroll] = useState(false);
  const [allCourse, setAllCourse] = useState({});
  const [coursesByCategory, setCoursesByCategory] = useState({});
  const [loading, setLoading] = useState();
  const [cartData, setCartData] = useState();
  const [cartCount, setCartCount] = useState(0);
  const [cartItem, setCartItem] = useRecoilState(cartItemList);
  const [isLogged, setIsLogged] = useRecoilState(userAuth);
  const [error, setError] = useState();
  let dispatch = useDispatch();

  const [drawable, setDrawable] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  let { admin, isLogin } = useSelector((state) => state.AuthReducer);
  const logoutHandler = () => {
    dispatch(logoutAction());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLogged(false);
  };
  const [user, setUser] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpen(false);
    setOpen(false);
  };
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawable({ ...drawable, [anchor]: open });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  });
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setUser(true);
    } else {
      // console.log("false");
      setUser(false);
    }
  }, [user]);
  useEffect(() => {
    const getCartData = async () => {
      if (!cartData) {
        let data = await getFromCartApi(setCartData, setLoading, setError);
        setCartCount(data?.length);
      }
    };
    getCartData();
    setCartItem(cartData);
  }, []);
  useEffect(() => {
    AllCourseApi(setAllCourse, setCoursesByCategory, setLoading);
  }, []);
  if (loading === true) {
    toast.error("Weak Network", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setLoading(false);
  }

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        p: 2,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Typography>
          <a className="sidebar-link" href="/#services">
            Services
          </a>
        </Typography>
      </List>

      <List>
        <Link className="sidebar-link" to="/all-courses/all">
          Courses
        </Link>
      </List>
      <List>
        <Link className="sidebar-link" to="/events">
          Events
        </Link>
      </List>
      <List>
        <Link className="sidebar-link" to="/interview-questions">
          Interview Questions
        </Link>
      </List>
      <List>
        <Link className="sidebar-link" to="/blogs">
          Blogs
        </Link>
      </List>
      {isLogin ? (
        <>
          <List>
            <Link className="sidebar-link" to="/my-courses">
              My Courses
            </Link>
          </List>
          <List>
            <Link className="sidebar-link" to="/my-cart">
              My Cart
            </Link>
          </List>
          <List>
            <Link className="sidebar-link" to="/" onClick={logoutHandler}>
              Logout
            </Link>
          </List>
        </>
      ) : (
        <button className="btn-grad btn-nav" onClick={handleClickOpen}>
          <span className={scroll === false ? "color-white" : "color-black"}>
            LogIn / SignUp
          </span>
        </button>
      )}
    </Box>
  );

  return (
    <>
      <AppBar className={scroll ? "navbar-background" : "bg-royal-transparent"}>
        <div className={scroll ? "hide-primary-navbar" : ""}>
          <PrimaryNavBar />
        </div>
        <Container
          maxWidth="lg"
          className="secondary-navbar"
          style={{ whiteSpace: "nowrap" }}
        >
          <Toolbar
            className="main-logo"
            style={{ paddingTop: "3px", width: "250px" }}
          >
            <Link to="/">
              <img src={logoOnScroll} height="100%" width="250px" alt="Logo" />
            </Link>
          </Toolbar>
          <Toolbar>
            <Button
              onClick={toggleDrawer("left", true)}
              className="techvanto-navbar-menu-icon menu-icon"
            >
              <MenuIcon sx={{ color: "white" }} />
            </Button>
            <SwipeableDrawer
              anchor={"left"}
              open={drawable["left"]}
              onClose={toggleDrawer("left", false)}
              onOpen={toggleDrawer("left", true)}
            >
              {list("left")}
            </SwipeableDrawer>
            <Container className="navbar-category">
              <div className="menu-item">
                <div className="item courses">
                  <Link to="/all-courses/all" className="menu-text">
                    <span
                      className={
                        scroll === false ? "color-white" : "color-black"
                      }
                    >
                      Courses
                    </span>
                  </Link>
                  <div className="dropdown-content">
                    <ul className="dropdown-menu-multi-level">
                      <li>
                        <a>
                          <NavLink to="/all-courses/school">Schools</NavLink>
                          <div className="course-list school-course">
                            <div className="image-section">
                              <img src={`${SchoolIcon}`} alt="" />
                            </div>
                            <div className="school-course-list">
                              <span>Courses</span>
                              <ul>
                                {isEmpty(coursesByCategory) === false &&
                                  coursesByCategory.School?.map((item) => {
                                    return (
                                      <li key={item._id}>
                                        <a href={`/courses/${item._id}`}>
                                          {item.course_name}
                                        </a>
                                        <div className="course-desc desc">
                                          <div className="desc-heading">
                                            Description
                                          </div>
                                          <div
                                            style={{
                                              width: "225px",
                                              textAlign: "justify",
                                              whiteSpace: "pre-wrap",
                                            }}
                                          >
                                            {item.description}
                                          </div>
                                        </div>
                                      </li>
                                    );
                                  })}
                              </ul>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a>
                          <Link to="/all-courses/college">Colleges</Link>
                          <div className="course-list">
                            <div
                              className="image-section"
                              style={{
                                background:
                                  "linear-gradient(120deg, #fc8955 0%, #fc8955 50%, #fcb82f 100%",
                              }}
                            >
                              <img src={`${CollegeIconIcon}`} alt="" />
                            </div>
                            <div className="school-course-list">
                              <span>Courses</span>
                              <ul>
                                {isEmpty(coursesByCategory) === false &&
                                  coursesByCategory.College?.map((item) => {
                                    return (
                                      <li key={item._id}>
                                        <a href={`/courses/${item._id}`}>
                                          {item.course_name}
                                        </a>
                                        <div className="course-desc desc">
                                          <div className="desc-heading">
                                            Description
                                          </div>
                                          <div
                                            style={{
                                              width: "225px",
                                              textAlign: "justify",
                                              whiteSpace: "pre-wrap",
                                            }}
                                          >
                                            {item.description}
                                          </div>
                                        </div>
                                      </li>
                                    );
                                  })}
                              </ul>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a>
                          <Link to="/all-courses/intermediate">
                            Intermediate{" "}
                          </Link>
                          <div className="course-list">
                            <div
                              className="image-section"
                              style={{
                                background:
                                  "linear-gradient(120deg, #307bf2 0%, #307bf2 50%, #c38efd 100%",
                              }}
                            >
                              <img src={`${IntermediateIcon}`} alt="" />
                            </div>
                            <div className="school-course-list">
                              <span>Courses</span>
                              <ul>
                                {isEmpty(coursesByCategory) === false &&
                                  coursesByCategory.Intermediate?.map(
                                    (item) => {
                                      return (
                                        <li key={item._id}>
                                          <a
                                            // onClick={refreshPage}
                                            href={`/courses/${item._id}`}
                                          >
                                            {item.course_name}
                                          </a>
                                          <div className="course-desc desc">
                                            <div className="desc-heading">
                                              Description
                                            </div>
                                            <div
                                              style={{
                                                width: "225px",
                                                textAlign: "justify",
                                                whiteSpace: "pre-wrap",
                                              }}
                                            >
                                              {item.description}
                                            </div>
                                          </div>
                                        </li>
                                      );
                                    }
                                  )}
                              </ul>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item">
                  <a href="/#services" className="menu-text">
                    <span
                      className={
                        scroll === false ? "color-white" : "color-black"
                      }
                    >
                      Services
                    </span>
                  </a>
                </div>
                <div className="item">
                  <Link to="/events" className="menu-text">
                    <span
                      className={
                        scroll === false ? "color-white" : "color-black"
                      }
                    >
                      Events
                    </span>
                  </Link>
                </div>
                <div className="item">
                  <Link to="/interview-questions" className="menu-text">
                    <span
                      className={
                        scroll === false ? "color-white" : "color-black"
                      }
                    >
                      Interview Questions
                    </span>
                  </Link>
                </div>
                <div className="item">
                  <Link to="/blogs" className="menu-text">
                    <span
                      className={
                        scroll === false ? "color-white" : "color-black"
                      }
                    >
                      Blogs
                    </span>
                  </Link>
                </div>

                <div className="item">
                  <div className="dropdown">
                    <a className="menu-text">
                      <span
                        className={
                          scroll === false ? "color-white" : "color-black"
                        }
                      >
                        Contact Us
                      </span>
                    </a>
                    <div className="dropdown-content-contact">
                      <Link to="/contact-us-for-hiring">For Hiring</Link>
                      <Link to="/contact-us-to-get-hired">To Get Hired</Link>
                      <Link to="/coming-soon">know More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
            <div className="item user-aria">
              {isLogin ? (
                <>
                  <Link to="/my-cart" style={{ marginRight: "30px" }}>
                    <IconButton aria-label="cart" className="color-white">
                      <Badge badgeContent={cartCount} color="error">
                        <ShoppingCartIcon fontSize="large" />
                      </Badge>
                    </IconButton>
                  </Link>

                  <div className="dropdown">
                    <Link to="/">
                      <span
                        className="color-white"
                        // className={
                        //   scroll === false ? "color-white" : "color-black"
                        // }
                      >
                        <AccountCircleIcon fontSize="large" />
                      </span>
                    </Link>
                    <div className="dropdown-content-contact">
                      <Link to="/my-courses">My Courses</Link>
                      <a style={{ color: "black" }} onClick={logoutHandler}>
                        Log Out
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <button
                    className="btn-grad btn-nav"
                    onClick={handleClickOpen}
                  >
                    <span
                      className={
                        scroll === false ? "color-white" : "color-black"
                      }
                    >
                      LogIn / SignUp
                    </span>
                  </button>

                  <Login
                    open={isLogin ? false : open}
                    handleClose={handleClose}
                    PaperComponent={PaperComponent}
                  />
                </>
              )}
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
export default NavBar;
