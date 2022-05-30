import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ({gastos, presupuesto}) => {

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);
    const [porcentaje, setPorcentaje] = useState(0);

    useEffect(()=>{
        const totalGastado = gastos.reduce((total, gasto) => Number(gasto.cantidad) + total, 0)
        const totalDisponible = presupuesto - totalGastado;

        const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);
        setTimeout(()=>{
            setPorcentaje(nuevoPorcentaje);
        },1000)

        setDisponible(totalDisponible);
        setGastado(totalGastado);
        
    },[gastos])

    const formatearCantidad = (cantidad) =>{
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

  return (
    <div className='row container-presupuesto'>
        <div className='col-6' style={{ width: 250, height: 250 }}>
            <CircularProgressbar
                styles={buildStyles({
                    pathColor: 'cadetblue',
                    textColor: 'cadetblue',
                    textSize: '10px'
                })}
                value={porcentaje}
                text={`${porcentaje}% Gastado`}
            />
        </div>

        <div className='col-6 columna-2'>
            <p>Presupuesto: <span>{formatearCantidad(presupuesto)}</span></p>
            <p>Disponible: <span>{formatearCantidad(disponible)}</span></p>
            <p>Gastado: <span>{formatearCantidad(gastado)}</span></p>
        </div>
    </div>
  )
}

export default ControlPresupuesto