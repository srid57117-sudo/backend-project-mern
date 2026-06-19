import { useState } from "react";
import CourseCard from "../components/CourseCard";

const ArrayObjPage = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "React JS",
      category: "Frontend",
      year: 2025,
    },
    {
      id: 2,
      name: "Node JS",
      category: "Backend",
      year: 2025,
    },
    {
      id: 3,
      name: "MongoDB",
      category: "Database",
      year: 2025,
    },
    {
      id: 4,
      name: "Express JS",
      category: "Framework",
      year: 2025,
    },
    {
      id: 5,
      name: "Next JS",
      category: "Full Stack",
      year: 2025,
    },
  ]);

  const handleEdit = () => {
    const updated = courses.map((item) => ({
      ...item,
      year: 2020,
    }));

    setCourses(updated);
  };

  return (
    <div className="bg-slate-100 min-h-screen p-10">
      <div className="flex justify-between mb-10">
        <h1 className="text-3xl font-bold">
          Array Of Object Rendering
        </h1>

        <button
          onClick={handleEdit}
          className="bg-indigo-600 text-white px-5 py-2 rounded"
        >
          Edit All
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
          />
        ))}
      </div>
    </div>
  );
};

export default ArrayObjPage;