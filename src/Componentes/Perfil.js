import React from 'react';
import '../estilos/Perfil.css';

function Perfil(props){
    return(
        <div className='contenedor-perfil'>
         <img className='imagen-perfil'
            src={require(`../imagenes/perfil-${props.imagen}.png`)}
            alt='Fotos de desarrolladores'
         />

         <div className='contenedor-texto-perfil'>
               {props.nombre} en {props.pais}
              <p ClassName='cargo-perfil'>
               {props.cargo} en {props.empresa}
        </p>
        <p ClassName='resena-de-perfil'>
               {props.resena}
        </p>
    </div>
   </div>
  )
};

export default Perfil

