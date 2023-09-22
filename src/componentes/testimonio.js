import React from 'react';
import '../hojas-de-estilo/testimonio.css'

export function Testimonio(props) {
    return(
        <div className='testimonio-contenedor'>
            <img 
            className='testimonio-imagen'
            src={require(`../imagenes/${props.imagen}.jpg`)} 
            alt = 'Foto'/>
            <div className='testimonio-texto'>
                <p className='texto-nombre'><strong>{props.nombre}</strong> de {props.pais} </p>
                <p className='texto-cargo'><strong>{props.cargo}</strong> en <strong>{props.empresa}</strong> </p>
                <p className='texto-testimonio'>{props.testimonio} </p>
            </div>
        </div>
);}

export default Testimonio;