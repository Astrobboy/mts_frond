import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import './style.css';
import holder from './placeholder.png';



const Login = ({ getData, getUser, getPass}) => {
    return (
        <div className="login">
            <form onSubmit={getData} method='post' >
                <div>
                    <img src={holder} alt="" />
                </div>
                <div>
                    <TextField
                        name="username"
                        floatingLabelText="username"
                        type="text"
                        onChange={getUser}
                    /><br />
                    <TextField
                        name="password"
                        floatingLabelText="password"
                        type="password"
                        onChange={getPass}
                    /><br />
                </div>
                <FlatButton
                    label="Submit"
                    primary={true}
                    type="submit"
                />
            </form>
        </div>
    );
};

Login.propTypes = {
    getData: PropTypes.func.isRequired,
    getPass: PropTypes.func.isRequired,
    getUser: PropTypes.func.isRequired,
}

export default Login;