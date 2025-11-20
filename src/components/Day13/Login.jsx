import React, {useState, useContext} from 'react'
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Correct condition
    if (username.trim() === "") {
      toast.error("Please enter a valid username");
      return;
    }

    // Successful login
    login(username);
    toast.success("Login Successful!");
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg p-8 rounded-xl w-96 hover:shadow-xl transition">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 rounded mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded mb-4"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
