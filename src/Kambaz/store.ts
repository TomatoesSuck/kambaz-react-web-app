import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import courseReducer from "./Courses/reducer"
import enrollmentReducer from "./Enrollments/reducer";
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    courseReducer,
    enrollmentReducer,
  },
});
export default store;