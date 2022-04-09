import React from 'react';
import '../hojas-de-estilo/Pantalla.css'


/*el componente siempre se escribe primero con mayuscula*/
/*esta vez lo definimos como una arrow function al componente*/
const Pantalla = ({ input }) => (
    <div className='input'>
    {input}
    </div>
);

export default Pantalla;