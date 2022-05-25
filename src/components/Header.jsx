import React from 'react'
import ControlPresupuesto from './ControlPresupuesto'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({presupuesto, setPresupuesto, isvalidPresupuesto, setIsvalidPresupuesto}) => {
  return (
    <div>
        <h1 className='text-center pb-4'>Planificador de Gastos</h1>

        {isvalidPresupuesto ?
          <ControlPresupuesto
          presupuesto={presupuesto}
          />
          :
          <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsvalidPresupuesto={setIsvalidPresupuesto}
          />
        }
        
    </div>
  )
}

export default Header