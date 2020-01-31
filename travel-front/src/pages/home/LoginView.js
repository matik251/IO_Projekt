import React from 'react';
import PropTypes from 'prop-types';
import "./LoginView.scss"
function LoginView () {
    return(
        <div id="login_modal">
            <div className="login_content">
                <h3>Zaloguj się</h3>
                <input type="text" name="bday" placeholder="email"/>
                <input type="text" name="bday" placeholder="password" />
                <button>Zaloguj się</button>
                <h6>Zarejestruj się</h6>
            </div>
        </div>
    )
};

LoginView.propTypes = {
  displayServerError: PropTypes.func.isRequired,
};

export default LoginView;