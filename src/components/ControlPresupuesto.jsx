import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {

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
            <p>Disponible: <span>{formatearCantidad(presupuesto)}</span></p>
            <p>Gastado: <span>{formatearCantidad(presupuesto)}</span></p>
        </div>
    </div>
  )
}

export default ControlPresupuesto