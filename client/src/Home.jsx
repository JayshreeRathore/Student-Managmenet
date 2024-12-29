import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card text-center shadow p-5" style={{ width: "400px" }}>
        <h2 className="mb-4">Welcome to Student-Managment App</h2>
        <div className="d-flex flex-column gap-3">
          <Link to="/signup" className="btn btn-primary btn-lg w-100">
            Sign Up
          </Link>
          <Link to="/login" className="btn btn-secondary btn-lg w-100">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
