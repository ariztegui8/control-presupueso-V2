import React from 'react'
import ControlPresupuesto from './ControlPresupuesto'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({presupuesto, setPresupuesto, isvalidPresupuesto, setIsvalidPresupuesto, error, seterror, gastos}) => {
  return (
    <div className='mt-5'>
        <h1 className='text-center pb-4'>Planificador de Gastos</h1>

        {isvalidPresupuesto ?
          <ControlPresupuesto
          gastos={gastos}
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