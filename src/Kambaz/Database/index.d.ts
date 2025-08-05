export interface User {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
}

export interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image: string;
}

export interface Module {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons: Lesson[];
}

export interface Lesson {
  _id: string;
  name: string;
  description: string;
  module: string;
}

export interface Assignment {
  _id: string;
  title: string;
  course: string;
  category: string;
  points: number;
  due: string;
}

export interface Enrollment {
  _id: string;
  user: string;
  course: string;
  role: string;
}

export interface Grade {
  _id: string;
  student: string;
  assignment: string;
  course: string;
  grade: number;
}

export declare const users: User[];
export declare const courses: Course[];
export declare const modules: Module[];
export declare const assignments: Assignment[];
export declare const enrollments: Enrollment[];
export declare const grades: Grade[]; 