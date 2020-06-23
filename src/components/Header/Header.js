import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='Header d-flex'>
            <h1>
                <Link to="/">Star Wars Wiki</Link>
            </h1>

            <ul className="d-flex main_nav">
                <li>
                    <Link to="/people">People</Link>
                </li>
                <li>
                    <Link to="/planet">Planets</Link>
                </li>
                <li>
                    <Link to="/starships">Starships</Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;