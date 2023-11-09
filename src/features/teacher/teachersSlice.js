import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  teachers: [],
  status: "idle",
  error: null
};
const API_URL = "https://student-management-api.pratmbr.repl.co/teacher";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async () => {
    const response = await axios.get(API_URL);
    return response.data.teachers;
  }
);

export const addTeacherAsync = createAsyncThunk(
  "teachers/addTeacherAsync",
  async (newTeacher) => {
    const response = await axios.post(API_URL, newTeacher);
    return response.data.teacher;
  }
);

export const editTeacherAsync = createAsyncThunk(
  "teachers/editTeacherAsync",
  async ({ teacherId, teacher }) => {
    const response = await axios.put(`${API_URL}/${teacherId}`, teacher);
    return response.data.teacher;
  }
);

export const deleteTeacherAsync = createAsyncThunk(
  "teachers/deleteTeacherAsync",
  async ({ teacherId }) => {
    const response = await axios.delete(`${API_URL}/${teacherId}`);
    return response.data.teacher;
  }
);

const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTeachers.pending]: (state) => {
      state.status = "loading";
    },
    [fetchTeachers.fulfilled]: (state, action) => {
      state.status = "success";
      state.teachers = action.payload;
    },
    [fetchTeachers.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [addTeacherAsync.pending]: (state) => {
      state.status = "loading";
    },
    [addTeacherAsync.fulfilled]: (state, action) => {
      state.status = "success";
      state.teachers.push(action.payload);
    },
    [addTeacherAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [editTeacherAsync.pending]: (state) => {
      state.status = "loading";
    },
    [editTeacherAsync.fulfilled]: (state, action) => {
      state.status = "success";
      const updatedStudent = action.payload;
      state.teachers = state.teachers.map((student) =>
        student._id === updatedStudent._id ? updatedStudent : student
      );
    },
    [editTeacherAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [deleteTeacherAsync.pending]: (state) => {
      state.status = "loading";
    },
    [deleteTeacherAsync.fulfilled]: (state, action) => {
      state.status = "success";
      const deletedTeacher = action.payload;
      state.teachers = state.teachers.filter(
        ({ _id }) => _id !== deletedTeacher._id
      );
    },
    [deleteTeacherAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    }
  }
});

export default teachersSlice.reducer;
