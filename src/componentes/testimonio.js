import React from 'react';

export function Testimonio(props) {
    return(
        <div className='testimonio-contenedor'>
            <img 
            className='testimonio-imagen'
            src={require(`../imagenes/${props.imagen}.jpg`)} 
            alt = 'Foto'/>
            <div className='testimonio-texto'>
                <p className='texto-nombre'>{props.nombre} de {props.pais} </p>
                <p className='texto-cargo'>{props.cargo} en {props.empresa} </p>
                <p className='texto-testimonio'>{props.testimonio} </p>
            </div>
        </div>
);}

export default Testimonio;