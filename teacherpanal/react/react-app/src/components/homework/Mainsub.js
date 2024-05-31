/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import './mainsub.css';
import Pending  from './Pending';
import Submitted from './Submitted';
import Evaluated from './Evaluated';

function Mainsub () {
  const [activeTab, setActiveTab] = useState('Pending');
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  }
  return (
    <div className="maincontener">
    <div className="maincontener1">
        <div className="maintextimg">
            <h1 className="maintext">Your Homework<br></br>is here!</h1>
            <div className="mainimg"></div>
        </div>
    </div>
    <div className="mainbut1">
        <div className="mainbuttons1">
            <div>
            <span className={activeTab === 'Pending' ? 'active pending' : 'hoverButton'} onClick={() => handleTabChange('Pending')}>Pending</span>
            </div>
            <div>
            <span className={activeTab === 'Submitted' ? 'active submitted' : 'hoverButton'} onClick={() => handleTabChange('Submitted')}>Submitted</span>
            </div>
            <div>
            <span className={activeTab === 'Evaluated' ? 'active evaluated' : 'hoverButton'} onClick={() => handleTabChange('Evaluated')}>Evaluated</span>
            </div>
        </div>
    </div>
    {activeTab === 'Pending' && <Pending />}
    {activeTab === 'Submitted' && <Submitted />}
    {activeTab === 'Evaluated' && <Evaluated />}
    </div>    
  );
}

export default Mainsub;
