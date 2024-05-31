import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link} from 'react-router-dom';
import './Syllabus.css';

//IMG
import English from './images/English.png';
import Marathi from './images/Marathi.png';
import Hindi from './images/hindi.png';
import Science from './images/Science.png';
import Mathematic from './images/Mathematic.png';
import History from './images/History.png';
import Art from './images/Art.png';
import Sports from './images/Sports.png'

const Syllabus = () => {

  return (
    <div className="homecontene">
      <div className='feedbackheader'>
        <Link to="/student"><FontAwesomeIcon icon={faArrowLeft} className='Attendanceicon' /></Link>
        <h1>Syllabus</h1>
      </div>
            <div className="homecon">
            <Link to="/Subject">
            <div className="homecontener">
                <div className="homeimg">
                    <img src={English} alt="Homework" />
                </div>
                <h1>English</h1>
            </div>
            </Link>
            <Link to="/Subject">
        <div className="homecontener">
            <div className="homeimg">
                <img src={Marathi} alt="Syllabus" />
            </div>
            <h1>Marathi</h1>
        </div>
        </Link>
        <Link to="/Subject">
        <div className="homecontener">
            <div className="homeimg">
                <img src={Hindi} alt="Chat" />
            </div>
            <h1>Hindi</h1>
        </div> 
        </Link>
        <Link to="/Subject">   
        <div className="homecontener">
            <div className="homeimg">
                <img src={Science} alt="Attendence_Sheet" />
            </div>
            <h1>Science</h1>
        </div>
        </Link>
        <Link to="/Subject">
        <div className="homecontener">
            <div className="homeimg">
                <img src={Mathematic} alt="Video_Lecture" />
            </div>
            <h1>Mathematic</h1>
        </div> 
        </Link>
        <Link to="/Subject"> 
        <div className="homecontener">
            <div className="homeimg">
                <img src={History} alt="QPaper"/>
            </div>
            <h1>History</h1>
        </div>
        </Link>
        <Link to="/Subject">
        <div className="homecontener">
            <div className="homeimg">
                <img src={Art} alt="Calender"/>
            </div>
            <h1>Art</h1>
        </div>
        </Link>
        <Link to="/Subject"> 
        <div className="homecontener">
            <div className="homeimg">
                <img src={Sports} alt="Feedback" />
            </div>
            <h1>Sports</h1>
        </div>
        </Link>
        </div>
            </div>
  );
}
export default Syllabus;
