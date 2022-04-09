import React from 'react';
import '../hojas-de-estilo/BotonClear.css';


const BotonClear = (props) => (
    <diV className = 'boton-clear' onClick ={props.manejarClear}>
        {props.children}
    </diV>
);

export default BotonClear;