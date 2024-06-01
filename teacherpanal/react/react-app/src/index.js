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
import ThomeMainsub from './components/Dailyhomework/ThomeMainsub';
import AttendanceCal from './components/TAttendence/Attendancecal';
import DailyUpdates from './components/DailyUpdates/Update';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CollegeCodeEntry />} />
      <Route path="login" element={<StudentLogin />} /> 
      <Route path="teacher" element={<TeacherStudentDashbord />} />
      <Route path="Teacherprofile" element={<Profilepage />} />
      <Route path="ThomeMainsub" element={<ThomeMainsub />} />
      <Route path="AttendanceCal" element={<AttendanceCal />}/>
      <Route path="Update" element={<DailyUpdates />} />
    </Routes>
  </BrowserRouter>
);
reportWebVitals();
