/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import CollegeCodeEntry from './components/CollegeCodeEntry';
import StudentLogin from './components/studentlogin'; 
import TeacherStudentDashbord from './components/TeacherStudentDashbord';
import Profilepage from './components/Profilepage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CollegeCodeEntry />} />
      <Route path="login" element={<StudentLogin />} /> 
      <Route path="teacher" element={<TeacherStudentDashbord />} />
      <Route path="Teacherprofile" element={<Profilepage />} />
    </Routes>
  </BrowserRouter>
);
reportWebVitals();