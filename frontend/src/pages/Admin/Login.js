import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { message } from "antd";
import { HideLoading, ShowLoading } from "../../redux/rootSlice";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const login = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/admin-login", user);
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        localStorage.setItem("token", response.data);
        window.location.href = "/admin";
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
      dispatch(HideLoading());
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 flex gap-5 p-5 shadow border border-gray-5000 flex-col">
        <h1 className="text-2xl flex justify-center">Sinqe - Admin Login</h1>
        <br />
        <input
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="Username"
        />
        <input
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
        />
        <button
          className="bg-primary text-white p-2 rounded-lg"
          onClick={login}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
