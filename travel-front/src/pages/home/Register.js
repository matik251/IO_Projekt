import React from 'react';
import PropTypes from 'prop-types';
import "./LoginView.scss"
function Register () {
    return(
        <div id="login_modal">
            <div className="login_content">
                <h3>Zarejestruj się</h3>
                <input type="text" name="bday" placeholder="email"/>
                <input type="text" name="bday" placeholder="Hasło" />
                <input type="text" name="bday" placeholder="Powtorz hasło" />
                <button>Zarejestruj się</button>
                <h6>Wroc do logowania się</h6>
            </div>
        </div>
    )
};

Register.propTypes = {
  displayServerError: PropTypes.func.isRequired,
};

export default Register;