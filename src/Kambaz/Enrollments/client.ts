import axios from "axios";
const HTTP_SERVER = import.meta.env.VITE_HTTP_SERVER || "http://localhost:4000";
const ENROLLMENTS_API = `${HTTP_SERVER}/api/enrollments`;

export const fetchAllEnrollments = async () => {
  try {
    const response = await axios.get(ENROLLMENTS_API);
    return response.data;
  } catch (error) {
    console.error('Error fetching enrollments:', error);
    throw error;
  }
};

export const findEnrollmentsForUser = async (userId: string) => {
  try {
    const response = await axios.get(`${ENROLLMENTS_API}/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user enrollments:', error);
    throw error;
  }
};

export const findEnrollmentsForCourse = async (courseId: string) => {
  try {
    const response = await axios.get(`${ENROLLMENTS_API}/course/${courseId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching course enrollments:', error);
    throw error;
  }
};

export const enrollUserInCourse = async (userId: string, courseId: string) => {
  try {
    const response = await axios.post(ENROLLMENTS_API, { userId, courseId });
    return response.data;
  } catch (error) {
    console.error('Error enrolling user in course:', error);
    throw error;
  }
};

export const unenrollUserFromCourse = async (userId: string, courseId: string) => {
  try {
    const response = await axios.delete(ENROLLMENTS_API, { 
      data: { userId, courseId } 
    });
    return response.data;
  } catch (error) {
    console.error('Error unenrolling user from course:', error);
    throw error;
  }
};

export const deleteEnrollment = async (enrollmentId: string) => {
  try {
    const response = await axios.delete(`${ENROLLMENTS_API}/${enrollmentId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting enrollment:', error);
    throw error;
  }
}; 