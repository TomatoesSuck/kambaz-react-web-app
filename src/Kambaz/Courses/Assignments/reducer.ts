import { createSlice } from "@reduxjs/toolkit";
import * as coursesClient from "../client";
import * as client from "./client";

type State = {
  assignments: any[];
  loading: boolean;
  error: string | null;
};

const initialState: State = {
  assignments: [],
  loading: false,
  error: null
};

const assignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, { payload }) => { state.assignments = payload; },
    addAssignment: (state, { payload }) => { state.assignments.push(payload); },
    updateAssignmentLocal: (state, { payload }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === payload._id ? payload : a
      );
    },
    deleteAssignmentLocal: (state, { payload: aid }) => {
      state.assignments = state.assignments.filter((a: any) => a._id !== aid);
    },
    setLoading: (state, { payload }) => { state.loading = payload; },
    setError: (state, { payload }) => { state.error = payload; }
  }
});

export const {
  setAssignments, addAssignment, updateAssignmentLocal, deleteAssignmentLocal,
  setLoading, setError
} = assignmentSlice.actions;

export default assignmentSlice.reducer;


export const loadAssignments = (courseId: string) => async (dispatch: any) => {
  try {
    dispatch(setLoading(true));
    const list = await coursesClient.findAssignmentsForCourse(courseId);
    dispatch(setAssignments(list));
  } catch (e) {
    dispatch(setError("Failed to load assignments"));
  } finally {
    dispatch(setLoading(false));
  }
};

export const createAssignmentAPI = (courseId: string, payload: any) => async (dispatch: any) => {
  try {
    const created = await client.createAssignment(courseId, payload);
    dispatch(addAssignment(created));
    return created;
  } catch (e) {
    dispatch(setError("Failed to create assignment"));
    throw e;
  }
};

export const updateAssignmentAPI = (assignment: any) => async (dispatch: any) => {
  try {
    const updated = await client.updateAssignment(assignment._id, assignment);
    dispatch(updateAssignmentLocal(updated ?? assignment));
    return updated ?? assignment;
  } catch (e) {
    dispatch(setError("Failed to update assignment"));
    throw e;
  }
};

export const deleteAssignmentAPI = (aid: string) => async (dispatch: any) => {
  try {
    await client.deleteAssignment(aid);
    dispatch(deleteAssignmentLocal(aid));
  } catch (e) {
    dispatch(setError("Failed to delete assignment"));
    throw e;
  }
};