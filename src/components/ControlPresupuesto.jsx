import React, { useEffect, useState } from 'react'

const ControlPresupuesto = ({gastos, presupuesto}) => {

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

    useEffect(()=>{
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)

        const totalDisponible = presupuesto - totalGastado;
        
        setGastado(totalGastado);
        setDisponible(totalDisponible);
    }, [gastos])

    const formatearCantidad = (cantidad) =>{
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

  return (
    <div className='row'>
        <div className='col-4'>
            <p>Grafica Aquí</p>
        </div>

        <div className='col -8'>
            <p>Presupuesto: <span>{formatearCantidad(presupuesto)}</span></p>
            <p>Disponible: <span>{formatearCantidad(disponible)}</span></p>
            <p>Gastado: <span>{formatearCantidad(gastado)}</span></p>
        </div>
    </div>
  )
}

export default ControlPresupuesto