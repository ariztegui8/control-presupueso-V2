import React from 'react'

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div>
        <form className='formulario-filtros'>
            <label>Filtrar Gastos</label>
            <select
                value={filtro}
                onChange={e => setFiltro(e.target.value)}
            >
                <option value="">-- Todas las categorias --</option>
                <option value="alquiler">Alquiler</option>
                <option value="tarjetas">Tarjetas</option>
                <option value="comida">Comida</option>
                <option value="vicios">Vicios</option>
                <option value="servicios">Servicios</option>
                <option value="combustible">Combustible</option>
                <option value="salud">Salud</option>
            </select>
        </form>
    </div>
  )
}

export default Filtros