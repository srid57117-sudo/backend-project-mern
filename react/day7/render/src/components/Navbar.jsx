import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-indigo-700 p-5 flex justify-center gap-10 text-white font-bold">
      <Link to="/">Array</Link>
      <Link to="/object">Object</Link>
      <Link to="/arrobj">Array Of Object</Link>
    </div>
  );
};

export default Navbar;