import { ClassView } from "./components/ClassView";
import { NavBar } from "./components/NavBar";
import { SchoolView } from "./components/SchoolView";
import { StudentView } from "./components/StudentView";
import { TeacherView } from "./components/TeacherView";
import { StudentDetail } from "./features/student/StudentDetail";
import { StudentForm } from "./features/student/StudentForm";
import { TeacherDetail } from "./features/teacher/TeacherDetail";
import { TeacherForm } from "./features/teacher/TeacherForm";

import "./styles.css";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<StudentView />} />
        <Route path="/add/student" element={<StudentForm />} />
        <Route path="/edit/student" element={<StudentForm />} />
        <Route path="/student/:id" element={<StudentDetail />} />
        <Route path="/teacher" element={<TeacherView />} />
        <Route path="/add/teacher" element={<TeacherForm />} />
        <Route path="/edit/teacher" element={<TeacherForm />} />
        <Route path="/teacher/:id" element={<TeacherDetail />} />
        <Route path="/class" element={<ClassView />} />
        <Route path="/school" element={<SchoolView />} />
      </Routes>
    </div>
  );
}
