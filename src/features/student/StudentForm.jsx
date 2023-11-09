import { useState } from "react";

import { gradeList, genderList, classList } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addStudentAsync, editStudentAsync } from "./studentsSlice";
import { useLocation, useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  age: "",
  grade: "",
  gender: "",
  attendance: "",
  marks: "",
  standard: ""
};

export const StudentForm = () => {
  const { state: student } = useLocation();
  const dispatch = useDispatch();
  const [studentData, setStudentData] = useState(
    student ? student : initialState
  );
  const { name, age, grade, gender, attendance, marks, standard } = studentData;
  const navigate = useNavigate();

  const inputHandler = (e) =>
    setStudentData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  console.log(studentData);

  const studentSubmitHandler = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      age === "" ||
      grade === "" ||
      gender === "" ||
      attendance === "" ||
      marks === "" ||
      standard === ""
    ) {
      alert("Please fill all the fields.");
    } else {
      if (!student) {
        dispatch(addStudentAsync(studentData));
      } else {
        dispatch(
          editStudentAsync({ studentId: student._id, student: studentData })
        );
      }
      navigate("/");
      setStudentData(initialState);
    }
  };

  return (
    <div className="form">
      <form className="entry_form" onSubmit={studentSubmitHandler}>
        <h2 style={{ margin: 0 }}>{student ? "Edit" : "Add"} Student</h2>
        <label className="form_label">Name</label>
        <input
          className="from_input"
          type="text"
          name="name"
          value={name}
          onChange={inputHandler}
        />
        <label className="form_label">Age</label>
        <input
          className="from_input"
          type="number"
          name="age"
          value={age}
          onChange={inputHandler}
        />
        <label className="form_label">Grade</label>
        <select
          name="grade"
          value={grade}
          onChange={inputHandler}
          className="from_input"
        >
          <option value="">Select Grade</option>
          {gradeList.map((grade, index) => (
            <option key={index} value={grade}>
              {grade}
            </option>
          ))}
        </select>
        <label className="form_label">Gender</label>
        <select
          name="gender"
          value={gender}
          onChange={inputHandler}
          className="from_input"
        >
          <option value="">Select Gender</option>
          {genderList.map((gender, index) => (
            <option key={index} value={gender}>
              {gender}
            </option>
          ))}
        </select>
        <label className="form_label">Attendence</label>
        <input
          className="from_input"
          type="number"
          name="attendance"
          value={attendance}
          onChange={inputHandler}
        />
        <label className="form_label">Marks</label>
        <input
          className="from_input"
          type="number"
          name="marks"
          value={marks}
          onChange={inputHandler}
        />
        <label className="form_label">Standard</label>
        <select
          name="standard"
          value={standard}
          onChange={inputHandler}
          className="from_input"
        >
          <option value="">Select Standard</option>
          {classList.map((standard, index) => (
            <option key={index} value={standard}>
              {standard}
            </option>
          ))}
        </select>
        <button type="submit" className="add_btn submit_btn">
          {student ? "Save" : "Add"} Student
        </button>
      </form>
    </div>
  );
};
