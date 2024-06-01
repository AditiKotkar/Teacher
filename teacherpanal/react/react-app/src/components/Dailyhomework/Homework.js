import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link} from 'react-router-dom';
import './Homework.css';

//IMG
import English from './images/English.png';
import Marathi from './images/Marathi.png';
import Hindi from './images/hindi.png';
import Science from './images/Science.png';
import Mathematic from './images/Mathematic.png';
import History from './images/History.png';
import Art from './images/Art.png';
import Sports from './images/Sports.png'

const home = () => {

  return (
    <div className="homecontene">
     <div className="homebg">
     <div className='homeicon'>
     <Link to="/student"><FontAwesomeIcon icon={faArrowLeft} className='profile-icon' /> </Link>
    </div>
        <div className="homeName"> 
        <h1 className='homework'>Homework</h1>
        </div>
        <div className="homeimg-1"></div>          
     </div>
            <div className="homecon">
            <Link to="/mainsub">
            <div className="homecontener">
                <div className="homeimg">
                    <img src={English} alt="Homework" />
                </div>
                <h1>English</h1>
            </div>
            </Link>
            <Link to="/mainsub">
        <div className="homecontener">
            <div className="homeimg">
                <img src={Marathi} alt="Syllabus" />
            </div>
            <h1>Marathi</h1>
        </div>
        </Link>
        <Link to="/mainsub">
        <div className="homecontener">
            <div className="homeimg">
                <img src={Hindi} alt="Chat" />
            </div>
            <h1>Hindi</h1>
        </div> 
        </Link>
        <Link to="/mainsub">   
        <div className="homecontener">
            <div className="homeimg">
                <img src={Science} alt="Attendence_Sheet" />
            </div>
            <h1>Science</h1>
        </div>
        </Link>
        <Link to="/mainsub">
        <div className="homecontener">
            <div className="homeimg">
                <img src={Mathematic} alt="Video_Lecture" />
            </div>
            <h1>Mathematic</h1>
        </div> 
        </Link>
        <Link to="/mainsub"> 
        <div className="homecontener">
            <div className="homeimg">
                <img src={History} alt="QPaper"/>
            </div>
            <h1>History</h1>
        </div>
        </Link>
        <Link to="/mainsub">
        <div className="homecontener">
            <div className="homeimg">
                <img src={Art} alt="Calender"/>
            </div>
            <h1>Art</h1>
        </div>
        </Link>
        <Link to="/mainsub"> 
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
export default home;
