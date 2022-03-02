//all routes here
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Events from "../pages/events/Events";
import Course from "../pages/courses/Course";
import AllCourses from "../pages/courses/All-courses/AllCourses";
import Blogs from "../pages/blogs/Blogs";
import Single from "../pages/blogs/singleBlog/Single";
import ContactUsForHiring from "../pages/contact-us/contactUsForHiring";
import NotFound from "../components/NotFound";
import EventDetail from "../pages/SingleEvent/SingleEvent";
import TestQuestion from "../pages/testQuestion/TestQuestion";
import ContactUsToGetHired from "../pages/contact-us/contactUsToGetHired";
import MyCart from "../pages/myCart/MyCart";
import MyCourses from "../pages/myCourses/MyCourses";
import ComingSoon from "../components/ComingSoon/ComingSoon";
import TermsAndCondition from "../components/TermsAndCondition";
import PrivacyPolicy from "../components/PrivacyPolicy";
import PlacementPolicies from "../components/PlacementPolicies";
import ScrollToTop from "../components/ScrollToTop";
import PaymentPolicies from "../components/PaymentPolicies";
const MainRouters = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/coming-soon" element={<ComingSoon />}></Route>
        {/* doubt below route */}
        <Route
          path="/all-courses/:categoryRoute"
          element={<AllCourses></AllCourses>}
        ></Route>
        <Route path="/courses/:id" element={<Course></Course>}></Route>
        <Route
          path="/interview-questions"
          element={<TestQuestion></TestQuestion>}
        ></Route>
        <Route path="/events" element={<Events></Events>}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/blogs/:id" element={<Single />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route
          path="/contact-us-for-hiring"
          element={<ContactUsForHiring />}
        ></Route>
        <Route
          path="/contact-us-to-get-hired"
          element={<ContactUsToGetHired />}
        ></Route>
        <Route path="/event/:id" element={<EventDetail></EventDetail>}></Route>

        <Route path="/my-cart" element={<MyCart />}></Route>
        <Route path="/my-courses" element={<MyCourses />}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route
          path="/terms-and-conditions"
          element={<TermsAndCondition />}
        ></Route>
        <Route path="/placement-policy" element={<PlacementPolicies />}></Route>
        <Route path="/payment-policy" element={<PaymentPolicies />}></Route>
      </Routes>
    </ScrollToTop>
  );
};
export default MainRouters;
