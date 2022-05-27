import React from 'react'
import {FormatearFecha} from '../components/helpers/index';

import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'
import logo6 from '../assets/logo6.png'
import logo7 from '../assets/logo7.png'

const iconos = {
    alquiler: logo1,
    tarjetas: logo2,
    comida: logo3,
    vicios: logo4,
    servicios: logo5,
    combustible: logo6,
    salud: logo7
}

const Gasto = ({gasto}) => {

    const {nombre, cantidad, categoria, fecha} = gasto;

  return (
    <div className='container-gasto text-white w-50 p-3 mb-3'>
        <div className='container-iconos'>
            <img src={iconos[categoria]} alt="iconos" />
        </div>
        <div>
            <p>Gasto: <span>{nombre}</span></p>
            <p>Cantidad: <span>${cantidad}</span></p>
            <p>Categoria: <span>{categoria}</span></p>
            <p>Fecha: <span>{FormatearFecha(fecha)}</span></p>
        </div>
    </div>
  )
}

export default Gasto