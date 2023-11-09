import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { fetchTeachers } from "../features/teacher/teachersSlice";
import { TeacherList } from "../features/teacher/TeacherList";

export const TeacherView = () => {
  const { teachers, status, error } = useSelector(({ teachers }) => teachers);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchTeachers());
  }, []);
  console.log(teachers);
  return (
    <div>
      <h2>Teacher View </h2>
      {status === "loading" && <h3>Loading...</h3>}
      {status === "error" && <p>{error}</p>}
      <button onClick={() => navigate("/add/teacher")} className="add_btn">
        Add Teacher
      </button>
      <div className="list">
        <TeacherList teachers={teachers} />
      </div>
    </div>
  );
};
