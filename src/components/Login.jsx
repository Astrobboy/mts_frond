import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';




const Login = ({ handleSubmit}) => {
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <div>
                    <TextField
                        name="username"
                        floatingLabelText="username"
                        type="text"
                    /><br />
                    <TextField
                        name="password"
                        floatingLabelText="password"
                        type="password"

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
    handleSubmit: PropTypes.func.isRequired,
}

export default Login;