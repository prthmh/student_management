import { useNavigate } from "react-router-dom";

export const StudentList = ({ students }) => {
  const navigate = useNavigate();
  return (
    <div className="student_list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
            <th>Gender</th>
            <th>Attendence</th>
            <th>Marks</th>
            <th>Standard</th>
          </tr>
        </thead>
        <tbody>
          {students.map(
            ({
              _id,
              name,
              age,
              grade,
              gender,
              attendance,
              marks,
              standard
            }) => (
              <tr
                key={_id}
                onClick={() => navigate(`/student/${_id}`)}
                className="list_item"
              >
                <td title="Go To student detail">{name}</td>
                <td>{age}</td>
                <td>{grade}</td>
                <td>{gender}</td>
                <td>{attendance}</td>
                <td>{marks}</td>
                <td>{standard}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};
