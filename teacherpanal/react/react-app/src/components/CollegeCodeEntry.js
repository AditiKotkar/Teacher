import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './images/background 3.png';
import group from './images/Group 286.png'
import './CollegeCodeEntry.css';

const CollegeCodeEntry = () => {
  const [collegeCode, setCollegeCode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('College Code:', collegeCode); 
    try {
      const response = await fetch('http://localhost:3001/checkCollegeCode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ collegeCode }),
      });
      const data = await response.text();
      if (response.ok) {
        navigate('/login');
      } else {
        alert(data); 
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Please try again.');
    }
  };

  return (
    <div className="Collegecontent">
      <div className='logoconten-9'>
        <img src={logo} className='logo' alt='logo'></img>
        <p>Software | Education | Advertising</p>
      </div>
      <div className='formcontent'>
      <form  onSubmit={handleSubmit}>
        <input className="input" type="text" placeholder="Enter School Code" value={collegeCode} onChange={(e) => setCollegeCode(e.target.value)} /><br></br>
        <button type="submit">PROCEED</button>
      </form>
      </div>
      <img src={group} className='group' alt='logo'></img>
    </div>
  );
};

export default CollegeCodeEntry;
