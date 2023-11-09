import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  students: [],
  status: "idle",
  error: null,
  genderFilter: "All",
  sortBy: "Select",
  classFilter: "All"
};
const API_URL = "https://student-management-api.pratmbr.repl.co/student";

export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    const response = await axios.get(API_URL);
    return response.data.students;
  }
);

export const addStudentAsync = createAsyncThunk(
  "students/addStudentAsync",
  async (newStudent) => {
    const response = await axios.post(API_URL, newStudent);
    return response.data.student;
  }
);

export const editStudentAsync = createAsyncThunk(
  "students/editStudentAsync",
  async ({ studentId, student }) => {
    const response = await axios.put(`${API_URL}/${studentId}`, student);
    return response.data.student;
  }
);

export const deleteStudentAsync = createAsyncThunk(
  "students/deleteStudentAsync",
  async ({ studentId }) => {
    const response = await axios.delete(`${API_URL}/${studentId}`);
    return response.data.student;
  }
);

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    setGenderFilter: (state, action) => {
      state.genderFilter = action.payload;
    },
    setClassFilter: (state, action) => {
      state.classFilter = action.payload;
    },
    setSort: (state, action) => {
      state.sortBy = action.payload;
    }
  },
  extraReducers: {
    [fetchStudents.pending]: (state) => {
      state.status = "loading";
    },
    [fetchStudents.fulfilled]: (state, action) => {
      state.status = "success";
      state.students = action.payload;
    },
    [fetchStudents.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [addStudentAsync.pending]: (state) => {
      state.status = "loading";
    },
    [addStudentAsync.fulfilled]: (state, action) => {
      state.status = "success";
      state.students.push(action.payload);
    },
    [addStudentAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [editStudentAsync.pending]: (state) => {
      state.status = "loading";
    },
    [editStudentAsync.fulfilled]: (state, action) => {
      state.status = "success";
      const updatedStudent = action.payload;
      state.students = state.students.map((student) =>
        student._id === updatedStudent._id ? updatedStudent : student
      );
    },
    [editStudentAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [deleteStudentAsync.pending]: (state) => {
      state.status = "loading";
    },
    [deleteStudentAsync.fulfilled]: (state, action) => {
      state.status = "success";
      console.log(action.payload);
      const deletedStudent = action.payload;
      state.students = state.students.filter(
        ({ _id }) => _id !== deletedStudent._id
      );
    },
    [deleteStudentAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    }
  }
});

export const {
  setGenderFilter,
  setClassFilter,
  setSort
} = studentsSlice.actions;

export default studentsSlice.reducer;
