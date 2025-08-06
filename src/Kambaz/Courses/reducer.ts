import { createSlice } from "@reduxjs/toolkit";
import coursesData from "../Database/courses.json";

const initialState = {
  courses: coursesData,
  selectedCourse: null,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, { payload }) => {
      state.courses.push(payload);
    },
    deleteCourse: (state, { payload: courseId }) => {
      state.courses = state.courses.filter((c: any) => c._id !== courseId);
      if (state.selectedCourse && (state.selectedCourse as any)._id === courseId) {
        state.selectedCourse = null;
      }
    },
    updateCourse: (state, { payload }) => {
      state.courses = state.courses.map((c: any) =>
        c._id === payload._id ? payload : c
      );
      if (state.selectedCourse && (state.selectedCourse as any)._id === payload._id) {
        state.selectedCourse = payload;
      }
    },
    setSelectedCourse: (state, { payload }) => {
      state.selectedCourse = payload;
    },
  },
});

export const { addCourse, deleteCourse, updateCourse, setSelectedCourse } = coursesSlice.actions;
export default coursesSlice.reducer; 