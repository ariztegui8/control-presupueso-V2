import React, { useEffect, useState } from 'react'

const ControlPresupuesto = ({gastos, presupuesto}) => {

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

    useEffect(()=>{
        const totalGastado = gastos.reduce((total, gasto) => Number(gasto.cantidad) + total, 0)
        const totalDisponible = presupuesto - totalGastado;

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
        <div className='col-4'>
            <p>Grafica Aquí</p>
        </div>

        <div className='col -8 container-col8'>
            <p>Presupuesto: <span>{formatearCantidad(presupuesto)}</span></p>
            <p>Disponible: <span>{formatearCantidad(disponible)}</span></p>
            <p>Gastado: <span>{formatearCantidad(gastado)}</span></p>
        </div>
    </div>
  )
}

export default ControlPresupuesto