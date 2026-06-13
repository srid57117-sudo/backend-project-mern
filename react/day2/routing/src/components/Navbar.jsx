import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-slate-900 text-white p-4 flex gap-4">
      <NavLink to="/">Home</NavLink>

      <NavLink to="/about">About</NavLink>

      <NavLink to="/contact">Contact</NavLink>

      <button
        onClick={() => navigate("/login")}
        className="bg-blue-500 px-4 py-2 rounded"
      >
        Login
      </button>

      <button
        onClick={() => navigate("/register")}
        className="bg-green-500 px-4 py-2 rounded"
      >
        Register
      </button>
    </nav>
  );
}

export default Navbar;