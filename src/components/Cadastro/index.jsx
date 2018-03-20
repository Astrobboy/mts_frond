import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


const Cadastro = ({ getTotal, getInvoice_number, qr_generate}) => {
    return (
        <div className="container">
            <form className="form col s12" method="post">  
                <div className="input-group mb-3 ">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Notas:</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={getInvoice_number}/>
                    
                    <div className="tama"></div>
                    
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Qtdade:</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={getTotal}/>
                </div>    
                    
                    <div  className="generar">
                        <input type="checkbox" name="option" id="check1" />
                        <label >Revenda</label>
                        <br />
                    </div>

                    <div className="generar">
                    <button className="btn btn-lg btn-outline-primary" onClick={qr_generate} >Guardar e gerar Codigo QR</button>
                    </div>        
            </form>
            <button className="btn btn-lg btn-outline-primary" onClick={qr_generate} >pb Codigo QR</button>
        </div>
    );
};

Cadastro.propTypes = {
    getTotal:PropTypes.func.isRequired,
    getInvoice_number: PropTypes.func.isRequired,
    qr_generate: PropTypes.func.isRequired,
}

export default Cadastro;

