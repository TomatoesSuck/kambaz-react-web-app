import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER || "http://localhost:4000";
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export const fetchAllAssignments = async () => {
  try {
    const response = await axios.get(ASSIGNMENTS_API);
    return response.data;
  } catch (error) {
    console.error('Error fetching assignments:', error);
    throw error;
  }
};

export const findAssignmentById = async (assignmentId: string) => {
  try {
    const response = await axios.get(`${ASSIGNMENTS_API}/${assignmentId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching assignment details:', error);
    throw error;
  }
};

export const createAssignment = async (courseId: string, assignment: any) => {
  try {
    const response = await axios.post(
      `${REMOTE_SERVER}/api/courses/${courseId}/assignments`,
      assignment
    );
    return response.data;
  } catch (error) {
    console.error("Error creating assignment:", error);
    throw error;
  }
};

export const updateAssignment = async (assignmentId: string, assignment: any) => {
  try {
    const response = await axios.put(`${ASSIGNMENTS_API}/${assignmentId}`, assignment);
    return response.data;
  } catch (error) {
    console.error('Error updating assignment:', error);
    throw error;
  }
};

export const deleteAssignment = async (assignmentId: string) => {
  try {
    const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting assignment:', error);
    throw error;
  }
}; 