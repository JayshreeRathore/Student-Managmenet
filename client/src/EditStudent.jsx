import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  
  const [firstName, setFirstName] = useState();
  const [secondName, setSecondName] = useState();
  const [fatherName, setFatherName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  
  useEffect(() => {
    axios
      .get('http://localhost:5500/' + id)
      .then((res) => {
        setFirstName(res.data.firstName );
        setSecondName(res.data.secondName );
        setFatherName(res.data.fatherName );
        setEmail(res.data.email );
        setPassword(res.data.password );
      })
      .catch((error) => console.error("Error fetching student:", error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put('http://localhost:5500/edit/' + id, { firstName, secondName, fatherName, email, password })
      .then((result) => {
        navigate("/display"); 
      })
      .catch((err) => {
        console.error("Error:", err.message);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4" style={{ width: "400px", borderRadius: "10px" }}>
        <h2 className="text-center mb-4">Edit Student</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="secondName" className="form-label">Second Name</label>
            <input
              type="text"
              className="form-control"
              id="secondName"
              name="secondName"
              value={secondName}
              onChange={(e) => setSecondName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="fatherName" className="form-label">Father's Name</label>
            <input
              type="text"
              className="form-control"
              id="fatherName"
              name="fatherName"
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Update Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditStudent;
