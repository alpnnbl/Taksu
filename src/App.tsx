import React, { useEffect } from 'react'
import Navbar from './Navbar'
import './App.css';
import Form from "./pages/Form"
import Home from "./pages/Home"
import Project from "./pages/Project"
import { Route, Routes } from "react-router-dom"

function App() {

  useEffect(() => {
    alert('Welcome')
  })

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
