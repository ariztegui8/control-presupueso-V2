import React from 'react'
import ControlPresupuesto from './ControlPresupuesto'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({presupuesto, setPresupuesto, isvalidPresupuesto, setIsvalidPresupuesto, error, seterror}) => {
  return (
    <div className='mt-5'>
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
            error={error}
            seterror={seterror}
          />
        }
        
    </div>
  )
}

export default Header