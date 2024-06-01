import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Created.css';
import { Link } from 'react-router-dom';

function Created() {
  return (
    <div className='Createdcontent'>
      <div className='Createdteacher'>
      <div className='CreatedSelect'>
            <span><select>
            <option>Select Subjects</option>
            <option>English</option>
            <option>Marathi</option>
            <option>Hindi</option>
            <option>Mathematic</option>
            <option>History</option>
            <option>Sports</option>
            </select></span>
            <span><select>
            <option>Select Class</option>
            <option>Class-10</option>
            <option>Class-9</option>
            <option>Class-8</option>
            <option>Class-7</option>
            <option>Class-6</option>
            <option>Class-5</option>
            </select></span>
            <span><select>
            <option>Select Div</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
            </select></span>
        </div>
      <div class="field name">
        <input className='Createdconten1' type="text" placeholder="Point Name" required/>
      </div>
      <div class="field name">
        <input className='Createdconten1' type="text" name="Enter Name" placeholder="Homework Date" />
      </div>
      <div class="field name">
        <input className='Createdconten1' type="text" name="Enter Name" placeholder="submission Date" />
      </div>
      <div class="field textarea">
        <h2>Description</h2>
        <textarea  className='Createdconten2'  placeholder="Type here....." required></textarea>
      </div>
      <div className='Createdbutons'>
        <button className='CreatedUpload'>Upload</button>
        <button className='CreatedSUBMIT'>Submit</button>
      </div>
      </div>
      </div>
  );
}

export default Created;