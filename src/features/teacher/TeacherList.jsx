import { useNavigate } from "react-router-dom";

export const TeacherList = ({ teachers }) => {
  const navigate = useNavigate();
  return (
    <div className="student_list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map(({ _id, name, subject, contact }) => (
            <tr
              key={_id}
              onClick={() => navigate(`/teacher/${_id}`)}
              className="list_item"
            >
              <td title="Go To teacher detail">{name}</td>
              <td>{subject}</td>
              <td>{contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
