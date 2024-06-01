import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import './Update.css';
import { Link } from 'react-router-dom';

function Update() {
    const [dateSelected, setDateSelected] = useState('');
    const [timeSelected, setTimeSelected] = useState('');
    const [classSelected, setClassSelected] = useState('');
    const [subjectSelected, setSubjectSelected] = useState('');
    const [chapterName, setChapterName] = useState('');
    const [coverPoints, setCoverPoints] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleDateChange = (event) => {
        setDateSelected(event.target.value);
    };

    const handleTimeChange = (event) => {
        setTimeSelected(event.target.value);
    };

    const handleClassChange = (event) => {
        setClassSelected(event.target.value);
    };

    const handleSubjectChange = (event) => {
        setSubjectSelected(event.target.value);
    };

    const handleChapterNameChange = (event) => {
        setChapterName(event.target.value);
      };
    
      const handleCoverPointsChange = (event) => {
        setCoverPoints(event.target.value);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
      };
  return (
    <div className='TUpdatecontener'>
    <Link to="/teacher"><FontAwesomeIcon icon={faArrowLeft} className='Tupdatearrow' /></Link>
    <form onSubmit={handleSubmit}>
    <div className='Updatecontent'>
        <div className='updates'>
            <span value={dateSelected} onChange={handleDateChange}>12 March 2024</span>
            <span value={classSelected} onChange={handleClassChange}><select>
            <option>Class-10C</option>
            <option>Class-9B</option>
            <option>Class-8C</option>
            <option>Class-7A</option>
            </select></span>
            <span value={subjectSelected} onChange={handleSubjectChange}><select>
            <option>English</option>
            <option>Marathi</option>
            <option>Hindi</option>
            </select></span>
            <span value={timeSelected} onChange={handleTimeChange}>09.00 AM</span>
        </div>
        <input className="Updateinput" type="text" placeholder="Mention Chapter Name...." value={chapterName} onChange={handleChapterNameChange}/><br></br>
        <input className="Updateinput" type="text" placeholder="Mention Cover Points...."  value={coverPoints} onChange={handleCoverPointsChange}/><br></br>
    </div>
    <button type="Submit">SUBMIT</button>
    </form>
    <div className='Updatebox'>
    {formSubmitted && (
    <div className='Updateconten'>
        <div className='updates'>
            <span>{dateSelected}</span>
            <span>{classSelected}</span>
            <span>{subjectSelected}</span>
            <span>{timeSelected}</span>
        </div>
        <div className='uplodchapter'>
            <h1><FontAwesomeIcon icon={faStar} className='TUpdateicon'/>{chapterName}</h1>
            <ol className='u'>
               <li>{coverPoints}</li>
            </ol>
        </div>  
    </div>
)}
    <div className='Updateconten'>
        <div className='updates'>
            <span>12 March 2024</span>
            <span><select>
            <option>Class-10C</option>
            <option>Class-9B</option>
            <option>Class-8C</option>
            <option>Class-7A</option>
            </select></span>
            <span><select>
            <option>English</option>
            <option>Marathi</option>
            <option>Hindi</option>
            </select></span>
            <span>09.00 AM</span>
        </div>
        <div className='uplodchapter'>
            <h1><FontAwesomeIcon icon={faStar} className='TUpdateicon'/>A letter to God</h1>
            <ol className='u'>
                <li>Introduction</li>
                <li>Basic</li>
                <li>Problem set 1</li>
                <li>Problem set Answer</li>
                <li>Homework</li>
            </ol>
        </div>
    </div>
    <div className='Updateconten'>
        <div className='updates'>
            <span>12 March 2024</span>
            <span><select>
            <option>Class-10C</option>
            <option>Class-9B</option>
            <option>Class-8C</option>
            <option>Class-7A</option>
            </select></span>
            <span><select>
            <option>English</option>
            <option>Marathi</option>
            <option>Hindi</option>
            </select></span>
            <span>09.00 AM</span>
        </div>
        <div className='uplodchapter'>
            <h1><FontAwesomeIcon icon={faStar} className='TUpdateicon'/>Chemical equation</h1>
            <ol className='u'>
                <li>Introduction</li>
                <li>Basic</li>
                <li>Problem set 1</li>
                <li>Problem set Answer</li>
                <li>Homework</li>
            </ol>
        </div>   
    </div>
    <div className='Updateconten'>
        <div className='updates'>
            <span>12 March 2024</span>
            <span><select>
            <option>Class-10C</option>
            <option>Class-9B</option>
            <option>Class-8C</option>
            <option>Class-7A</option>
            </select></span>
            <span><select>
            <option>English</option>
            <option>Marathi</option>
            <option>Hindi</option>
            </select></span>
            <span>09.00 AM</span>
        </div>
        <div className='uplodchapter'>
            <h1><FontAwesomeIcon icon={faStar} className='TUpdateicon'/> Nationalism in India</h1>
            <ol className='u'>
                <li>Introduction</li>
                <li>Basic</li>
                <li>Problem set 1</li>
                <li>Problem set Answer</li>
                <li>Homework</li>
            </ol>
        </div>  
    </div>
    </div>
    </div>
  );
}
export default Update;



