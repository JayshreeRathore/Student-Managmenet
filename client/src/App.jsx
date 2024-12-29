import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Login from './Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Home";
import EditStudent from './EditStudent'
import StudentTable from './StudentTable'


function App() {
  

  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
     
      <Route path="/display" element={<StudentTable />} />
      <Route path="/edit/:id" element={<EditStudent />} />
    </Routes>
    </BrowserRouter>

   </div>
  )
}

export default App
