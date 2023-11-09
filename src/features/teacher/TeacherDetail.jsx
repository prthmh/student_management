import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteTeacherAsync } from "./teachersSlice";

export const TeacherDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { teachers } = useSelector(({ teachers }) => teachers);
  const findTeacher = teachers.find((student) => student._id === id);
  console.log(findTeacher);

  const deleteTeacherHandler = (id) => {
    dispatch(deleteTeacherAsync({ teacherId: id }));
    navigate("/teacher");
  };

  return (
    <div className="detail">
      <div className="individual">
        <p>
          <b>Name: </b>
          {findTeacher?.name}
        </p>
        <p>
          <b>Age: </b>
          {findTeacher?.subject}
        </p>
        <p>
          <b>Gender: </b>
          {findTeacher?.contact}
        </p>

        <Link to="/edit/teacher" state={findTeacher}>
          <button className="add_btn submit_btn">Edit</button>
        </Link>
        <button
          onClick={() => deleteTeacherHandler(findTeacher._id)}
          className="delete_btn"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
