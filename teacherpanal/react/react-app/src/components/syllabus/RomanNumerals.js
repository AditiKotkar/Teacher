import React, {useState} from 'react';
import { faSearch, faEllipsisVertical, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link } from 'react-router-dom';
import './RomanNumerals.css';

const RomanNumerals = () => {
    const [isActive, setIsActive] = useState(false);
    const [documentText, setDocumentText] = useState('');

    const toggleMenu = (menu) => {
        setIsActive(!isActive);
        fetchDocument(menu);
        // document.querySelector('.intro').classList.toggle('right-align');
    };
    const fetchDocument = (menu) => {
        let endpoint = '';
        switch (menu) {
            case 'Introduction':
                endpoint = '/introduction';
                break;
            case 'Rules':
                endpoint = '/rules';
                break;
            case 'set1':
                endpoint = '/set1';
                break;
            default:
                return;
        }
    fetch(endpoint)
        .then(response => response.text())
        .then(text => {
            setDocumentText(text);
        })
    };
  return (
<div className='RomanRomnNo'>
    <div className="Romanbgimg">
        <nav className="Romannavbar">
            <div className="Romanmax-width">
                <ul className={`Romanmenu ${isActive ? 'active' : ''}`}>
                    <li><a href="#Introduction" className="Romanmenu-btn" onClick={() => fetchDocument('Introduction')}>Introduction</a></li>
                    <li><a href="#Basic" className="Romanmenu-btn">Basic</a></li>
                    <li><a href="#Rules" className="Romanmenu-btn" onClick={() => fetchDocument('Rules')}>Rules</a></li>
                    <li><a href="#set1" className="Romanmenu-btn" onClick={() => fetchDocument('set1')}>Problem set 1</a></li>
                    <li><a href="#Video" className="Romanmenu-btn">Video Explanation</a></li>
                    <li><a href="#Pdf" className="Romanmenu-btn">Pdf Download</a></li>
                </ul>
                <div className="Romanmenu-btn" onClick={toggleMenu} >
                    <FontAwesomeIcon icon={isActive ? faTimes : faEllipsisVertical} />
                </div>
            </div>
        </nav>
        <div className='RomanRoman1'>
            <h1>1.Roman Numerals</h1>
            <FontAwesomeIcon icon={faSearch} className='Romansearch'></FontAwesomeIcon>
            <input className='RomanSearch' type="search" id="name" placeholder="Search By Name"></input>    
        </div>
        <div className='Romancontent'>
            <div className='Romanintro' onClick={toggleMenu}>
                <h1 className='RomanRoman'>Roman Numerals Introduction</h1>
                <p><span className='RomanGeeta'>Geeta :</span> This clock doesn’t have numbers. It has some symbols instead.
                <br></br>
                <br></br><span className='RomanTeacher'>Teacher :</span> Yes, Geeta These are Roman numerals. In Europe, in the old times, Roman capital letters were used to write numbers.That is why, they were called Roman numerals.The letter ‘I’ was the symbol used for 1, ‘V’ for 5, and ‘X’ for 10. In this method, there was no symbol for zero.Also, the value of a symbol did not change with its place. There are certain rules writing numbers using the Roman numerals. Let us see how to write 1 to 20 usingthese rules and the symbols I, V and X.</p>
            </div>
        </div>
    </div>
</div>
  );
}
export default RomanNumerals;