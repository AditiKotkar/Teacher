import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Profilepage.css';
import { Link} from 'react-router-dom';
const Profilepage = () => {
    const [student, setStudent] = useState([null]);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch('http://localhost:3001/student-info');
        const data = await response.json();
        setStudent(data[0]);
      } catch (error) {
        console.error('Error fetching student information:', error); 
      }
    };

    fetchStudentData();
  }, []);

    return (
    <div className='profile-content'>
        <div className='profile-Profile'>
        <Link to="/teacher"><FontAwesomeIcon icon={faArrowLeft} className="profile-icon" /> </Link>
            <h1 className='profile-ProfileName'>Profile</h1>
        </div>
        <div className='profile-IMG'>{student.photo}</div>
        
        <div className='profile-data'>
        <div className='profile-Dtext'>
        {student && (
        <form>
        <div>
            <label>Full Name : </label>
            <input type="text" name="stud_name" placeholder="profileName" value={student.stud_name || ''} readOnly />
        </div>
        <div>
            <label>Education : </label>
            <input type="text" name="stud_div" placeholder="Division" value={student.stud_rollno || ''} readOnly/>
        </div>
        <div>
            <label>Subject : </label>
            <input type="text" name="stud_div" placeholder="Division" value={student.stud_rollno || ''} readOnly/>
        </div>
        <div>
            <label>ID Number : </label>
            <input type="text" name="stud_div" placeholder="Division" value={student.stud_rollno || ''} readOnly/>
        </div>
        <div>
            <label>Mobile Number : </label>
            <input type="text" name="stud_phoneno" placeholder="Phone Number" value={student.stud_phoneno || ''} readOnly/>
        </div>
        <div>
            <label>Birth Date : </label>
            <input type="date" name="stud_dob" placeholder="Date of Birth" value={student.stud_dob || ''} readOnly/>
        </div>
        <div>
            <label>Email Id : </label>
            <input type="text" name="Mail" placeholder="Email" value={student.username || ''} readOnly/>
        </div>
        </form>
    )}
        </div>
        </div>
    </div>
    );       
};

export default Profilepage;
