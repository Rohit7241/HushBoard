import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import FloatingCard from './components/FloatingCard'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import Profile from './pages/Profile'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/Register'
import Login from './pages/Login'
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
