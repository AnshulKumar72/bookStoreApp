import React from 'react';
import { Route, Routes } from "react-router-dom";
import Contact from './components/Contact';
import Signup from './components/Signup';
import Courses from "./courses/Courses";
import Home from './home/Home';


function App  () {
  return (
  <>
  <div className="dark bg-slate-950 dark:text-white">
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/course" element={<Courses/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/contact" element={<Contact/>}/>
  </Routes>
  </div>
  </>
  );
}
export default App
