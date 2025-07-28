import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import courseReducer from "./Courses"
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    courseReducer
  },
});
export default store;