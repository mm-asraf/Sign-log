import React, { useState } from "react";
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
  const [user, setUser] = useState(userDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const data = { ...user, [name]: value };
    setUser(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3002/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
  };

  return (
    <div>
      <div className="signup">
        <input
          type="text"
          placeholder="Enter Your firstName"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Enter Your firstName"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Enter Your firstName"
          name="phoneNumber"
          value={user.phoneNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Your firstName"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Your firstName"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Your firstName"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleSubmit}>signup</button>
    </div>
  );
};

export default Signup;
