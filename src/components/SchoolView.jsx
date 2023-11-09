import { useSelector } from "react-redux";

export const SchoolView = () => {
  const { students, status, error } = useSelector(({ students }) => students);

  const avgAttendance =
    students.reduce((total, currStudent) => total + currStudent.attendance, 0) /
    students.length;

  const avgMarks =
    students.reduce((total, currStudent) => total + currStudent.marks, 0) /
    students.length;

  const topStudent = students.reduce(
    (topStudent, currStudent) =>
      currStudent.marks > topStudent.marks
        ? { name: currStudent.name, marks: currStudent.marks }
        : topStudent,
    { name: "", marks: 0 }
  );

  return (
    <div className="detail">
      {status === "loading" && <h3>Loading...</h3>}
      {status === "error" && <p>{error}</p>}
      <div className="info">
        <div className="school_detail">
          <div>
            <strong>No. of Students: </strong>
          </div>
          <div>{students.length}</div>
        </div>
        <div className="school_detail">
          <div>
            <strong>Average Attendance: </strong>
          </div>
          <div>{avgAttendance.toFixed(2)}</div>
        </div>
        <div className="school_detail">
          <div>
            <strong>Average Marks: </strong>
          </div>
          <div>{avgMarks.toFixed(2)}</div>
        </div>
        <div className="school_detail">
          <div>
            <strong>Top Student: </strong>
          </div>
          <div>{topStudent.name}</div>
        </div>
        <div className="school_detail">
          <div>
            <strong>Top Student Marks: </strong>
          </div>
          <div>{topStudent.marks}</div>
        </div>
      </div>
    </div>
  );
};
