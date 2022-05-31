import React, { useState, useEffect } from 'react'
import Error from './Error';

const Modal = ({setModal, error, seterror, guardarGasto, gastoEditar, setGastoEditar}) => {


    const [propiedades, setPropiedades] = useState({
        nombre: '',
        cantidad: '',
        categoria: '',
        id: '',
        fecha: ''
    });

    useEffect(() => {
        if(Object.keys(gastoEditar).length > 0){
            setPropiedades(gastoEditar)
          }
    }, [])

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
        setGastoEditar({})
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
                className='text-center w-50 m-auto text-white'
                onSubmit={handleSubmit}
                >
                <legend className='fs-1 my-5'> {gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>

                <div className='mb-3 '>
                    <label className='fs-5 mb-2' htmlFor="nombre">Nombre gasto</label>
                    <input
                        className='w-100 input-style'
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
                        className='w-100 input-style'
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
                        className='w-100 input-style'
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
                        <option value="salud">Salud</option>
                    </select>
                </div>

                <input 
                    className='mt-3 btn btn-primary w-50'
                    type="submit"
                    value={gastoEditar.nombre ? 'Guardar Cambios' : 'Añadir Gasto'}
                />

                {error && <Error mensaje="Todos los campos son obligatorios"/>}
            </form>
        </div>
    </div>
  )
}

export default Modal