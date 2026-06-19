import { useState } from "react";
import courseImg from "../assets/react.svg";

const Home = ({ datas }) => {
  const [newdata, setData] = useState(datas);

  const handleClick = () => {
    setData({
      ...newdata,
      year: 2020,
    });
  };

  return (
    <div className="bg-blue-500 min-h-screen flex flex-col justify-center items-center gap-5 p-10">
      <h1 className="text-4xl font-bold text-white">Home Page</h1>

      <button
        onClick={handleClick}
        className="bg-white text-black px-4 py-2 rounded-lg"
      >
        Read More
      </button>

      <div className="bg-white p-5 rounded-xl shadow-lg">
        <div className="bg-black text-white p-5 rounded-xl w-72">
          <img
            src={courseImg}
            alt="course"
            className="w-20 h-20 mx-auto mb-4"
          />

          <h2 className="text-2xl font-bold text-center">
            {newdata?.name}
          </h2>

          <p className="mt-2">
            <strong>Year:</strong> {newdata?.year}
          </p>

          <p>
            <strong>Category:</strong> {newdata?.cat}
          </p>

          <p className="mt-2">
            <strong>Plan:</strong> {newdata?.plan}
          </p>

          <p className="mt-2">
            <strong>Course:</strong>
            <span className="bg-amber-300 text-black px-2 py-1 rounded ml-2">
              {newdata?.course?.name}
            </span>
          </p>

          <button className="bg-white text-black w-full mt-4 py-2 rounded-lg">
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;