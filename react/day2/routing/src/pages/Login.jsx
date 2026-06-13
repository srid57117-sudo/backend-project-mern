import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    alert("Login Successful");

    navigate("/");
  };

  return (
    <div className="p-5">
      <h2 className="text-3xl font-bold mb-4">
        Login Page
      </h2>

      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
}

export default Login;