import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import './Update.css';
import { Link } from 'react-router-dom';

function Update() {
  return (
    <div className='TUpdatecontener'>
    <Link to="/teacher"><FontAwesomeIcon icon={faArrowLeft} className='Tupdatearrow' /></Link>
    <div className='Updatecontent'>
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
        <input className="Updateinput" type="text" placeholder="Mention Chapter Name...." /><br></br>
        <input className="Updateinput" type="text" placeholder="Mention Cover Points...." /><br></br>
    </div>
    <button type="Submit">SUBMIT</button>
    <div className='Updatebox'>
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
            <h1><FontAwesomeIcon icon={faStar} className='TUpdateicon'/>Roman Numbers</h1>
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