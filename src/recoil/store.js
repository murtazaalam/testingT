import { atom } from "recoil";
export const courseList = atom({
  key: "courseList",
  default: [],
});
export const cartItemList = atom({
  key: "cartItemList",
  default: [],
});
export const token = atom({
  key: "token",
  default: "",
});
export const userAuth = atom({
  key: "userAuth",
  default: false,
});
