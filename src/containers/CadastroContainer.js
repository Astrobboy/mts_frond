import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import * as actions from './../actions';
import { bindActionCreators } from 'redux';
import Cadastro from './../components/Cadastro';

class CadastroContainer extends Component {
  
    render() {
    return (
      <div>
        <Cadastro />
      </div>
    )
  }
}

//actions creators
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({ user1: state.userReducer.user})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CadastroContainer));