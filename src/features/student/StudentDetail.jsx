import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudentAsync } from "./studentsSlice";

export const StudentDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { students } = useSelector(({ students }) => students);
  const findStudent = students.find((student) => student._id === id);
  console.log(findStudent);

  const deleteStudentHandler = (id) => {
    dispatch(deleteStudentAsync({ studentId: id }));
    navigate("/");
  };

  return (
    <div className="detail">
      <div className="individual">
        <p>
          <b>Name: </b>
          {findStudent?.name}
        </p>
        <p>
          <b>Age: </b>
          {findStudent?.age}
        </p>
        <p>
          <b>Gender: </b>
          {findStudent?.gender}
        </p>
        <p>
          <b>Grade: </b>
          {findStudent?.grade}
        </p>
        <p>
          <b>Attendence: </b>
          {findStudent?.attendance}
        </p>
        <p>
          <b>Marks: </b>
          {findStudent?.marks}
        </p>
        <p>
          <b>Standard: </b>
          {findStudent?.standard} Std
        </p>
        <Link to="/edit/student" state={findStudent}>
          <button className="add_btn submit_btn">Edit</button>
        </Link>
        <button
          onClick={() => deleteStudentHandler(findStudent._id)}
          className="delete_btn"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
