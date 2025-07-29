import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  assignments: assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      const newAssignment = {
        _id: uuidv4(),
        ...action.payload,
      };
      state.assignments = [...state.assignments, newAssignment];
    },

    deleteAssignment: (state, action) => {
      const assignmentId = action.payload;
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== assignmentId
      );
    },

    updateAssignment: (state, action) => {
      const updated = action.payload;
      state.assignments = state.assignments.map((a) =>
        a._id === updated._id ? updated : a
      );
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } =
  assignmentsSlice.actions;

export default assignmentsSlice.reducer;