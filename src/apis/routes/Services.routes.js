import endpoint from "./Index.routes";

const routes = {
  GetCourses: endpoint + "all-courses",
  GetEvents: endpoint + "all-events",
  SignUp: endpoint + "auth/register",
  Login: endpoint + "auth/login",
  OrderTest: endpoint + "add-order",
  AddToCart: endpoint + "add-to-cart",
  GetCartItems: endpoint + "items-by-email",
  MyOrder: endpoint + "my-orders",
  RemoveFromCart: endpoint + "remove-from-cart/",
  AddOrder: endpoint + "add-order",
  OrderVerify: endpoint + "verify-order",
  InterviewQuestion: endpoint + "interview-questions",
  Blogs: endpoint + "blogs",
  SendQuery: endpoint + "add-query",
  TopCourse: endpoint + "top-courses",
  AddReview: endpoint + "add-review",
  AddHiring : endpoint + "add-hiring",
  AddPlacement : endpoint + "add-placement-opportunity"
};
export default routes;
