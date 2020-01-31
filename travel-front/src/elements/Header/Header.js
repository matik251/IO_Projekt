import React from 'react';
import PropTypes from 'prop-types';
import "./Header.scss"
import {NavLink} from "react-router-dom";
export const setLogin = (value) => {
    localStorage.setItem('login', value);
    window.location.reload(true);
};

function Header () {


    return(
        <div id="header">
            <h2>TravelWithUs</h2>
            <nav>
                <NavLink to="/">Wszystkie ogłoszenia</NavLink>
                {localStorage.getItem('login') !== 'true' && <button onClick={() => setLogin(true)}>Login</button>}
                {localStorage.getItem('login') === 'true' && <button onClick={() => setLogin(false)}>Logout</button>}
            </nav>
        </div>
    )
};

Header.propTypes = {
  displayServerError: PropTypes.func.isRequired,
};

export default Header;