import { useState } from "react";

function ObjectState() {

  const [student] = useState({
    id: 101,
    name: "Amirtham",
    course: "MERN Stack",
    city: "Chennai",
  });

  return (
    <div>
      <h2>Object in useState</h2>

      <p>ID : {student.id}</p>
      <p>Name : {student.name}</p>
      <p>Course : {student.course}</p>
      <p>City : {student.city}</p>
    </div>
  );
}

export default ObjectState;