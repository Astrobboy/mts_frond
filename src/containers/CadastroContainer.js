import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import * as actions from './../actions';
import { bindActionCreators } from 'redux';
import Cadastro from './../components/Cadastro/';

import { qri } from './../funcion/funciones';

var QRCode = require('qrcode-react');
//var fs = require('fs');

const invoice_number = '';
const total = '';
const pb = true;
const imagenes = new Array();

class CadastroContainer extends Component {

    qr_generate = () => {
        console.log(this.invoice_number);
        console.log(this.total);
        var hola = qri(this.invoice_number, this.total);
        console.log(hola);
    }


    getInvoice_number = event => {
        this.invoice_number = event.target.value
    }
    getTotal = event => {
        this.total = event.target.value
    }

    render() {
        return (
            <div>
                <Cadastro getTotal={this.getTotal} getInvoice_number={this.getInvoice_number} qr_generate={this.qr_generate} />
               
            </div>
        )
    }
}

//actions creators
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({ user1: state.userReducer.user})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CadastroContainer));