import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {Link } from 'react-router-dom';
import './Subject.css';
function Subject () {
  return (
    <div className="Subjectconten">
            <div className="SubjectyourSyllabus">
                <h1 className="SubjectSyllabus">Your Syllabus is here!</h1>
                <div className="Subjectimg"></div>
            </div>
            <div className="Subjectchapter">
                <Link to="/Syllabus"><FontAwesomeIcon icon={faArrowLeft} className='S-icon' /> </Link>
                <h1>Chapter Name</h1>
            </div>
            <div className="Subjectconteners">
            <Link to="/RomanNumerals">
                <div className="Subjectname">
                    <h1>1.Roman Numerals</h1>
                </div>
            </Link>
                <div className="Subjectname">
                    <h1>2.Number Work</h1>
                </div>
                <div className="Subjectname">
                   <h1>3.Addition and Subtraction</h1>
                </div>
                <div className="Subjectname">
                    <h1>4.Circle</h1>
                </div>
                <div className="Subjectname">
                    <h1>5.Multiplication and Division</h1>
                </div>
                <div className="Subjectname">
                    <h1>6.Fractions</h1>
                </div>
                <div className="Subjectname">
                    <h1>7.Angles</h1>
                </div>
                <div className="Subjectname">
                    <h1>8.Multiples and Factors</h1>
                </div>
                <div className="Subjectname">
                    <h1>9.Decimal Fractions</h1>
                </div>
                <div className="Subjectname">
                    <h1>10.Measuring Time</h1>
                </div>
                <div className="Subjectname">
                    <h1>11.Problems on Measurement</h1>
                </div>
                <div className="Subjectname">
                    <h1>12.Perimeter and Area</h1>
                </div>
            </div>
        </div>
          
  );
}

export default Subject;
