import React, { Component } from 'react';
import { connect } from 'react-redux';
//import Loginform from './../components/Login';
//import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";

import * as actions from './../actions';
import { bindActionCreators } from 'redux';


class LoginContainer extends Component {

    pb = () => {
        var payload = { username: 'hola', password: 'pass', token: 'token' }
        //obtengo la accion de mapDispatchToProps
       this.props.addUserData(payload);
        var prue = this.props.user1;
        console.log(prue);
 
    }
    
    render() {
       
        return (
            <div>
                <button onClick={this.pb} > hola </button>
             
            </div>
        );
    }
}
//actions creators
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({ user1: state.userReducer.user})



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer));