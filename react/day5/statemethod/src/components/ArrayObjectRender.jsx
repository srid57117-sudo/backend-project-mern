function ArrayObjectRender() {

  const students = [
    {
      id: 1,
      name: "Amirtham",
      course: "React",
    },
    {
      id: 2,
      name: "Priya",
      course: "Node JS",
    },
    {
      id: 3,
      name: "Kavin",
      course: "MongoDB",
    },
  ];

  return (
    <div>
      <h2>Array of Objects Rendering</h2>

      {students.map((student) => (
        <div key={student.id}>
          <h4>ID : {student.id}</h4>
          <p>Name : {student.name}</p>
          <p>Course : {student.course}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default ArrayObjectRender;