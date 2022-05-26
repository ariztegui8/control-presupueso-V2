import React from 'react'
import Error from './Error';

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsvalidPresupuesto, error, seterror}) => {

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
                className='btn btn-info'
                type="submit"
                value="Añadir"
            />

            {error &&
             <Error
              mensaje="Presupuesto no Válido"
              
              />}
        </form>
    </div>
  )
}

export default NuevoPresupuesto