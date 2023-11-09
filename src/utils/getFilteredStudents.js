export const getFilteredStudents = (
  students,
  genderFilter,
  classFilter,
  sortBy
) => {
  let filteredOutput = students;

  filteredOutput = filteredOutput.filter(({ gender }) =>
    genderFilter !== "All" ? gender === genderFilter : true
  );

  filteredOutput = filteredOutput.filter(({ standard }) =>
    classFilter !== "All" ? standard === classFilter : true
  );

  if (sortBy === "Name") {
    filteredOutput = [...filteredOutput].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  if (sortBy === "Age") {
    filteredOutput = [...filteredOutput].sort((a, b) => a.age - b.age);
  }

  if (sortBy === "Attendance") {
    filteredOutput = [...filteredOutput].sort(
      (a, b) => a.attendance - b.attendance
    );
  }

  if (sortBy === "Marks") {
    filteredOutput = [...filteredOutput].sort((a, b) => a.marks - b.marks);
  }

  return filteredOutput;
};
