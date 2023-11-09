import { useDispatch, useSelector } from "react-redux";
import { StudentList } from "../features/student/StudentList";
import { classList, genderList, sortList } from "../utils/constants";
import { getFilteredStudents } from "../utils/getFilteredStudents";
import {
  setClassFilter,
  setGenderFilter,
  setSort
} from "../features/student/studentsSlice";

export const ClassView = () => {
  const dispatch = useDispatch();
  const { students, genderFilter, sortBy, classFilter } = useSelector(
    ({ students }) => students
  );
  const filteredStudents = getFilteredStudents(
    students,
    genderFilter,
    classFilter,
    sortBy
  );

  return (
    <div>
      <h2>Class View</h2>
      <div className="filters">
        <label>
          Gender:
          <select
            className="from_input"
            value={genderFilter}
            onChange={(e) => dispatch(setGenderFilter(e.target.value))}
          >
            <option value="All">All</option>
            {genderList.map((gender, index) => (
              <option key={index} value={gender}>
                {gender}
              </option>
            ))}
          </select>
        </label>
        <label>
          Class:
          <select
            className="from_input"
            value={classFilter}
            onChange={(e) => dispatch(setClassFilter(e.target.value))}
          >
            <option value="All">All</option>
            {classList.map((std, index) => (
              <option key={index} value={std}>
                {std}
              </option>
            ))}
          </select>
        </label>
        <label>
          Sort By:
          <select
            className="from_input"
            value={sortBy}
            onChange={(e) => dispatch(setSort(e.target.value))}
          >
            <option value="">Select</option>
            {sortList.map((sort, index) => (
              <option key={index} value={sort}>
                {sort}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="list">
        {filteredStudents.length === 0 ? (
          <h3>No students for this filter. Please choose anothert filter.</h3>
        ) : (
          <StudentList students={filteredStudents} />
        )}
      </div>
    </div>
  );
};
