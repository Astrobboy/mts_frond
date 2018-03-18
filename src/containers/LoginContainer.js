import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loginform from './../components/Login';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";

import * as actions from './../actions';
import { bindActionCreators } from 'redux';

const user = '';
const password = ''
class LoginContainer extends Component {
    enviar (user, password){
        var data = { username: user, password: password };
        var url = 'http://localhost:3001/users/login',
            params = {
                method: 'POST', 
                //mode: 'cors', 
                //redirect: 'follow',
                headers: new Headers( {
                    'Content-Type': 'application/json'
                } ),
                body:JSON.stringify( data)     
            };  
        
           /* var xhttp = new XMLHttpRequest();
            
            xhttp.open("POST", url, true);
            xhttp.setRequestHeader('Content-Type','application/json')
            xhttp.send(JSON.stringify( data));
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    console.log("+++++++++++++++");
                    var headers = xhttp.getAllResponseHeaders()
                    console.log(xhttp);
                }
            };*/
        fetch( url, params )
        .then( response => {  
            console.log(response);
            console.log(response.headers.getAll); 
            console.log(response.status);
        })
            //.catch( e => console.error( 'Something went wrong' ) );
        
        

        /*  $.ajax({
                url: 'http://localhost:3000/users/login',
                data: data,
                method: 'post', 
                header: 'aplicattion/json',
                success: function (data, textStatus, request) {
                    alert(request.getResponseHeader('x-auth'));
                    localStorage.setItem("x-auth", request.getResponseHeader('x-auth'));
                    window.location.replace("/cadastro")
                    },
                    error: function (error) {
                        window.location.replace("/login")
                    }
            });*/
            
    }

    getData = () => {
        var payload = { username: this.user, password: this.password, token: 'token' }
        //obtengo la accion de mapDispatchToProps
       this.props.addUserData(payload);
        var prue = this.props.user1;
        //console.log(prue);
        this.enviar(this.user, this.password);
        
 
    }

    getUser = event => {
        this.user = event.target.value
    }
    getPass = event => {
        this.password = event.target.value
    }
    
    render() {
       
        return (
            <div>
                <Loginform getData={this.getData} getUser={this.getUser} getPass={this.getPass}/>
                <button onClick={this.getData} > hola </button>
             
            </div>
        );
    }
}


//actions creators
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({ user1: state.userReducer.user})



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer));