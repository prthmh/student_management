import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../features/student/studentsSlice";
import teacherReducer from "../features/teacher/teachersSlice";

export default configureStore({
  reducer: {
    students: studentReducer,
    teachers: teacherReducer
  }
});
