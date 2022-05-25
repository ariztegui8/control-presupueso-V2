import React, { useState } from 'react'

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsvalidPresupuesto}) => {

  const [error, seterror] = useState(false);

  const handlePresupuesto = e =>{
    e.preventDefault();
    if(!presupuesto || presupuesto < 0 ) {
      seterror(true)
      return
    } 
    seterror(false)
    setIsvalidPresupuesto(true)
  }

  const handlechange = e =>{
    setPresupuesto(Number(e.target.value));
  }

  return (
    <div className='text-center'>
        <h3>Nuevo Presupuesto</h3>

        <form
          className='d-flex flex-column align-items-center'
          onSubmit={handlePresupuesto}
          >
            <div className='p-4'>
                <label>Definir Presupuesto</label>
                <input
                    type="number"
                    placeholder='Añadir presupuesto'
                    value={presupuesto}
                    onChange={handlechange}
                    />
            </div>

            <input 
                type="submit"
                value="Añadir"
            />

            {error && <p>No es un presupuesto valido</p>}
        </form>
    </div>
  )
}

export default NuevoPresupuesto