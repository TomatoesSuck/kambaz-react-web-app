import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  enrollments: enrollments,
};

const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enroll: (state, action) => {
      const { user, course, role = "student" } = action.payload;
      const alreadyEnrolled = state.enrollments.some(
        (e) => e.user === user && e.course === course
      );

      if (!alreadyEnrolled) {
        state.enrollments = [
          ...state.enrollments,
          { _id: uuidv4(), user, course, role },
        ];
      }
    },

    unenroll: (state, action) => {
      const { user, course } = action.payload;
      state.enrollments = state.enrollments.filter(
        (e) => !(e.user === user && e.course === course)
      );
    },
  },
});

export const { enroll, unenroll } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;