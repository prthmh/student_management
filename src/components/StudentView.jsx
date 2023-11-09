import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { fetchStudents } from "../features/student/studentsSlice";
import { StudentList } from "../features/student/StudentList";
import { useNavigate } from "react-router-dom";

export const StudentView = () => {
  const { students, status, error } = useSelector(({ students }) => students);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);
  console.log(students);
  return (
    <div>
      <h2>Student View </h2>
      {status === "loading" && <h3>Loading...</h3>}
      {status === "error" && <p>{error}</p>}
      <button onClick={() => navigate("/add/student")} className="add_btn">
        Add Student
      </button>
      <div className="list">
        <StudentList students={students} />
      </div>
    </div>
  );
};
