import React, { useState } from 'react'
import Error from './Error';

const Modal = ({setModal, error, seterror, guardarGasto}) => {


    const [propiedades, setPropiedades] = useState({
        nombre: '',
        cantidad: '',
        categoria: ''
    });

    const {nombre, cantidad, categoria} = propiedades;

    const handleChange = e =>{
        setPropiedades({
            ...propiedades,
            [e.target.name] : e.target.value
        });
    };

    const handleSubmit = e =>{
        e.preventDefault()
        if([nombre, cantidad, categoria].includes('')){
            seterror(true)

            setTimeout(()=>{
                seterror(false)
            },3000)

            return;
        }
        guardarGasto(propiedades)
        setModal(false);
    
    }

    const cerrarModal = ()=>{
        setModal(false)
    }


  return (
    <div className='container-modal'>
        <div className='container-close'>
            <p
                onClick={cerrarModal}
            >X</p>
        </div>

        <div>
            <form
                className='text-center w-25 m-auto text-white'
                onSubmit={handleSubmit}
                >
                <legend className='fs-1 my-5'>Nuevo Gasto</legend>

                <div className='mb-3'>
                    <label className='fs-5 mb-2' htmlFor="nombre">Nombre gasto</label>
                    <input
                        className='w-100'
                        value={nombre}
                        name='nombre'
                        type="text"
                        id='nombre'
                        placeholder='Añadir nombre del gasto'
                        onChange={handleChange}
                    />
                </div>

                <div  className='mb-3'>
                    <label className='fs-5 mb-2' htmlFor="cantidad">Cantidad</label>
                    <input
                        className='w-100'
                        value={cantidad}
                        name='cantidad'
                        type="number"
                        id='cantidad'
                        placeholder='Añadir cantidad'
                        onChange={handleChange}
                    />
                </div>

                <div  className='mb-3'>
                    <label className='fs-5 mb-2' htmlFor="cantidad">Categorias</label>
                    <select
                        className='w-100'
                        value={categoria}
                        id="categoria"
                        name='categoria'
                        onChange={handleChange}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="alquiler">Alquiler</option>
                        <option value="tarjetas">Tarjetas</option>
                        <option value="comida">Comida</option>
                        <option value="vicios">Vicios</option>
                        <option value="servicios">Servicios</option>
                        <option value="combustible">Combustible</option>
                    </select>
                </div>

                <input 
                    className='mt-3 btn btn-primary'
                    type="submit"
                    value="Añadir gasto"
                />

                {error && <Error mensaje="Todos los campos son obligatorios"/>}
            </form>
        </div>
    </div>
  )
}

export default Modal