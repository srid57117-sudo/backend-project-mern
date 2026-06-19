const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-2xl transition">
      <img
        src="https://cdn-icons-png.flaticon.com/512/919/919851.png"
        className="w-16 h-16"
      />

      <h1 className="text-xl font-bold mt-3">
        {course.name}
      </h1>

      <p className="text-gray-500">
        {course.category}
      </p>

      <p className="text-indigo-600 font-semibold">
        Year : {course.year}
      </p>

      <button className="mt-4 bg-cyan-500 text-white px-4 py-2 rounded">
        Continue
      </button>
    </div>
  );
};

export default CourseCard;