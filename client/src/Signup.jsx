import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    fatherName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData); 

    
    axios
      .post("http://student-managmenet2.vercel.app/signup", formData, {
        
      })
      .then((result) => {
        console.log(result);
        navigate("/login"); 
      })
      .catch((err) => {
        console.error("Error:", err.response.data);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="secondName" className="form-label">
              Second Name
            </label>
            <input
              type="text"
              className="form-control"
              id="secondName"
              name="secondName"
              value={formData.secondName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="fatherName" className="form-label">
              Father's Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fatherName"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Signup
          </button>
        </form>
        <div className="text-center mt-3">
          <p className="mb-1">Already have an account?</p>
          <Link to="/login" className="btn btn-outline-secondary w-100">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
