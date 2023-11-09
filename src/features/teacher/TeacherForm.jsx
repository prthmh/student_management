import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTeacherAsync, editTeacherAsync } from "./teachersSlice";
import { useLocation, useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  subject: "",
  contact: ""
};
export const TeacherForm = () => {
  const { state: teacher } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [teacherData, setTeacherData] = useState(
    teacher ? teacher : initialState
  );

  const teacherinputHandler = (e) =>
    setTeacherData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));

  const teacherSubmitHandler = (e) => {
    e.preventDefault();
    if (
      teacherData.name === "" ||
      teacherData.subject === "" ||
      teacherData.contact === ""
    ) {
      alert("Please fill all the fields.");
    } else {
      if (!teacher) {
        dispatch(addTeacherAsync(teacherData));
      } else {
        dispatch(
          editTeacherAsync({ teacherId: teacher._id, teacher: teacherData })
        );
      }
      setTeacherData(initialState);
      navigate("/teacher");
    }
  };

  return (
    <div className="form">
      <form className="entry_form" onSubmit={teacherSubmitHandler}>
        <h2 style={{ margin: 0 }}>{teacher ? "Edit" : "Add"} Teacher</h2>
        <label className="form_label">Name</label>
        <input
          type="text"
          className="from_input"
          name="name"
          value={teacherData.name}
          onChange={teacherinputHandler}
        />
        <label className="form_label">Subject</label>
        <input
          type="text"
          className="from_input"
          name="subject"
          value={teacherData.subject}
          onChange={teacherinputHandler}
        />
        <label className="form_label">Contact</label>
        <input
          type="text"
          className="from_input"
          name="contact"
          value={teacherData.contact}
          onChange={teacherinputHandler}
        />
        <button type="submit" className="add_btn submit_btn">
          {teacher ? "Save" : "Add"} Teacher
        </button>
      </form>
    </div>
  );
};
