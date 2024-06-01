import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Attendance.css';
import { Link } from 'react-router-dom';

const TAttendanceCal = () => {
  const [value, setValue] = useState(new Date());
  const [absentDates, setAbsentDates] = useState([
    { title: 'Reasons of Holiday', date: new Date(2024, 5, 3), reason: 'ill' },
    { title: 'Reasons of Holiday', date: new Date(2024, 5, 19), reason: 'Sister Function' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newDate, setNewDate] = useState(new Date());
  const [newReason, setNewReason] = useState('');
  const [newTitle, setNewTitle] = useState('Reasons of Holiday');

  const [currentMonth, setCurrentMonth] = useState(value);

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const day = date.getDay();
      if (absentDates.some(absent => absent.date.toDateString() === date.toDateString())) {
        return 'absent';
      } else if (day === 0) {
        return 'sunday';
      } else if (day === 6) {
        return 'saturday';
      } else {
        return 'weekday';
      }
    }
  };

  const handleAddAbsentDate = () => {
    setAbsentDates([...absentDates, {title: newTitle, date: newDate, reason: newReason}]);
    setShowModal(false);
    setNewDate(new Date());
    setNewReason('');
    setNewTitle('Reasons of Holiday');
  };

  const handleMonthChange = ({ activeStartDate }) => {
    setCurrentMonth(activeStartDate);
  };

  const getAbsentDatesForCurrentMonth = () => {
    return absentDates.filter(absent => 
      absent.date.getMonth() === currentMonth.getMonth() && 
      absent.date.getFullYear() === currentMonth.getFullYear()
    );
  };

  const absentDatesForCurrentMonth = getAbsentDatesForCurrentMonth();

  return (
    <div className='TAttendancecontener'>
      <div className='TAttendancecal'>
        <Link to="/teacher"><FontAwesomeIcon icon={faArrowLeft} className='TAttendanceicon' /></Link>
        <h1>Attendance</h1>
        <FontAwesomeIcon icon={faPlus} className='TAttendanceicon' onClick={() => setShowModal(true)}/>
      </div>
      <div className='TAttendanceday'>
        <div className='TAttendancedays'>
          <Calendar
            onChange={setValue}
            value={value}
            tileClassName={tileClassName}
            onActiveStartDateChange={handleMonthChange}
          />
        </div>
        <div className='Tattendancere'>
          {absentDatesForCurrentMonth.length > 0 ? (
            absentDatesForCurrentMonth.map((absent, index) => (
              <div className='TAttendanceevents' key={index}>
                <div className='TAttendanceev'>
                  <div className='TAttendanceevent'>
                    <div className='TAttendancet'>
                      <div className='TAttendancedot'></div>
                      <p>{absent.date.toDateString()}</p>
                    </div>
                    <h1>{absent.title}</h1>
                    <h2>{absent.reason}</h2>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className='Tno-absent-message'>
              <h1>No absent this month...</h1>
            </div>
          )}
        </div>
      </div>
      {showModal && (
        <div className='TAbsentmodal'>
          <div className='TAbsentmodal-content'>
            <h2>Add Absent Date</h2>
            <label>Date: <input type='date' value={newDate.toISOString().substring(0, 10)} onChange={(e) => setNewDate(new Date(e.target.value))}/></label><br></br>
            <label>Reason: <input type='text' value={newReason} onChange={(e) => setNewReason(e.target.value)}/></label><br></br>
            <button onClick={handleAddAbsentDate}>Add</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TAttendanceCal;