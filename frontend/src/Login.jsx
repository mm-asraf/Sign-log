import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sign.css";
const userDetails = {
  email: "",
  password: "",
  confirmPassword: "",
};

const Login = () => {
  const [userData, setUserData] = useState(userDetails);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const data = { ...userData, [name]: value };
    setUserData(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData.firstName);

    fetch("http://localhost:3002/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((res) => {
        alert("Login succesfull");
        console.log(res);
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <div className="inner_login">
        <input
          type="text"
          placeholder="Enter Your email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Your password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Your confirmPassword"
          name="confirmPassword"
          value={userData.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleSubmit}>Login</button>
      <p>or</p>
      <button>
        <Link className="link" to="/">
          Signup
        </Link>
      </button>
    </div>
  );
};

export default Login;
