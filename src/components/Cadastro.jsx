import React from 'react';
import PropTypes from 'prop-types';




const Cadastro = () => {
    return (
        <div>
            <form id="form" className="col s12" method="post">
                    <input id="x" type="hidden" name="x_auth" value=""/>
                    <div className="input-group mb-3 ">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Notas:</span>
                        </div>
                        <input id="invoice_number" name="invoice_number" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                        <div className="tama"></div>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Qtdade:</span>
                        </div>
                        <input id="total" name="total" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <div  className="generar">
                        <input type="checkbox" name="option" id="check1" />
                        <label for="check1">Revenda</label>
                        <br />
                    </div>
                    <div className="generar">
                        <button className="btn btn-lg btn-outline-primary" >Guardar e gerar Codigo QR</button>
                    </div>        
                </form>
        </div>
    );
};

export default Cadastro;

