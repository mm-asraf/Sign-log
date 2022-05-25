import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sign.css";

const userDetails = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Signup = () => {
  const [userData, setUserData] = useState(userDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const data = { ...userData, [name]: value };
    setUserData(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData.firstName);
    const payload = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      phoneNumber: userData.phoneNumber,
      email: userData.email,
      password: userData.password,
      confirmPassword: userData.confirmPassword,
    };
    fetch("http://localhost:3002/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((res) => alert("signIn successfully"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="signup">
      <h2>Signup</h2>
      <div className="inner_signup">
        <input
          type="text"
          placeholder="Enter Your firstName"
          name="firstName"
          value={userData.firstName}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Enter Your lastName"
          name="lastName"
          value={userData.lastName}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Enter Your phoneNumber"
          name="phoneNumber"
          value={userData.phoneNumber}
          onChange={handleChange}
        />
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
      <button onClick={handleSubmit}>signup</button>
      <p>or</p>
      <button>
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
};

export default Signup;
