






import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
import * as client from "./client";

const initialState = {
  assignments: assignments,
  loading: false,
  error: null
}

const assignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
        _id: assignment._id,
        title: assignment.title,
        description: assignment.description,
        course: assignment.course,
        availableDate: assignment.availableDate,
        dueDate: assignment.dueDate,
        points: assignment.points,
        available: assignment.available,
        due: assignment.due
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId
      );
    },
    setAssignments: (state, { payload: assignments }) => {
      state.assignments = assignments;
    },
    setLoading: (state, { payload: loading }) => {
      state.loading = loading;
    },
    setError: (state, { payload: error }) => {
      state.error = error;
    }
  }
});

export const { addAssignment, updateAssignment, deleteAssignment, setAssignments, setLoading, setError } = assignmentSlice.actions;

export const loadAssignments = () => async (dispatch: any) => {
  try {
    dispatch(setLoading(true));
    const assignments = await client.fetchAllAssignments();
    dispatch(setAssignments(assignments));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError('Failed to load assignments'));
    dispatch(setLoading(false));
  }
};

export const createAssignmentAPI = (assignment: any) => async (dispatch: any) => {
  try {
    const newAssignment = await client.createAssignment(assignment);
    dispatch(addAssignment(newAssignment));
    return newAssignment;
  } catch (error) {
    dispatch(setError('Failed to create assignment'));
    throw error;
  }
};

export const updateAssignmentAPI = (assignment: any) => async (dispatch: any) => {
  try {
    const updatedAssignment = await client.updateAssignment(assignment._id, assignment);
    dispatch(updateAssignment(updatedAssignment));
    return updatedAssignment;
  } catch (error) {
    dispatch(setError('Failed to update assignment'));
    throw error;
  }
};

export const deleteAssignmentAPI = (assignmentId: string) => async (dispatch: any) => {
  try {
    await client.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  } catch (error) {
    dispatch(setError('Failed to delete assignment'));
    throw error;
  }
};

export default assignmentSlice.reducer;

