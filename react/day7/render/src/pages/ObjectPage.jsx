import { useState } from "react";
import CourseCard from "../components/CourseCard";

const ObjectPage = () => {
  const [course, setCourse] = useState({
    name: "React JS",
    category: "Frontend",
    year: 2025,
  });

  const handleEdit = () => {
    setCourse({
      ...course,
      year: 2020,
    });
  };

  return (
    <div className="bg-slate-100 min-h-screen p-10">
      <div className="flex justify-between mb-10">
        <h1 className="text-3xl font-bold">
          Object Rendering
        </h1>

        <button
          onClick={handleEdit}
          className="bg-indigo-600 text-white px-5 py-2 rounded"
        >
          Edit
        </button>
      </div>

      <div className="w-72">
        <CourseCard course={course} />
      </div>
    </div>
  );
};

export default ObjectPage;