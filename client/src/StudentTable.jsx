import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const StudentTable = () => {
  const [users,setUsers] = useState([]);

  
  useEffect(() => {
    axios.get('student-managmenet2.vercel.app/display')
      .then(users => {
        setUsers(users.data);
      })
      .catch(error => {
        console.log('Error fetching students data', error);
      });
  }, []); 

const handleDelete = (id) => {
    axios.delete('student-managmenet2.vercel.app/delete/' +id)
    .then(res => {console.log(res)
         window.location.reload()})
    .catch(err => console.log(err))
}

  return (
    <div className="container mt-4">
      <h2>Student Data</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Second Name</th>
            <th>Father's Name</th>
            <th>Email</th>
           
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map(user => (
              <tr key={user._id}>
                <td>{user.firstName}</td>
                <td>{user.secondName}</td>
                <td>{user.fatherName}</td>
                <td>{user.email}</td>
                <td>
                  <Link to= {`/edit/${user._id}` } className="btn btn-warning " >Edit</Link> &nbsp;&nbsp;
                  <Link className="btn btn-danger ml-2 " onClick={(e) => handleDelete(user._id)} >Delete</Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No students found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
