import { useState, useEffect } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import {generarId} from './components/helpers/index';
import ListadoGastos from "./components/ListadoGastos";
import Filtros from "./components/Filtros";



function App() {

  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  );

  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  );

  const [isvalidPresupuesto, setIsvalidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [error, seterror] = useState(false);
  const [gastoEditar, setGastoEditar] = useState({});
  const [filtro, setFiltro] = useState('');
  const [gastosFiltrados, setGastosFiltrados] = useState([]);

  useEffect(()=>{
    if(Object.keys(gastoEditar).length > 0){
      setModal(true)
    }
  },[gastoEditar]);

  useEffect(()=>{
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto]);

  useEffect(()=>{
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? []);
  }, [gastos]);

  useEffect(()=>{
    if(filtro) {
      const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro);
      setGastosFiltrados(gastosFiltrados);
    }
  }, [filtro]);

  useEffect(()=>{
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0;
      if(presupuestoLS > 0){
        setIsvalidPresupuesto(true)
      }
  }, []);

  const handleNuevoGasto = ()=>{
    setModal(true)
    setGastoEditar({})
  }

  const guardarGasto = gasto =>{
    if(gasto.id){
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados);
      setGastoEditar({});
    } else {
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos , gasto])
    }
  }

  const eliminarGasto = id =>{
    const gastosActualizados = gastos.filter( gasto => gasto.id !== id);
    setGastos(gastosActualizados);
  }

  return (
   <div className={modal ? 'fijar' : 'contenedor container'}>
      <Header
        gastos={gastos}
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isvalidPresupuesto={isvalidPresupuesto}
        setIsvalidPresupuesto={setIsvalidPresupuesto}
        error={error}
        seterror={seterror}
      />

     {isvalidPresupuesto && 
       <>
        <div>
          <Filtros
            filtro={filtro}
            setFiltro={setFiltro}
          />

          <ListadoGastos
            gastos={gastos}
            setGastoEditar={setGastoEditar}
            eliminarGasto={eliminarGasto}
            filtro={filtro}
            gastosFiltrados={gastosFiltrados}
          />
        </div>

        <div className="icon">
            <p
               onClick={handleNuevoGasto}
            >+</p>
        </div>
       </>
     }

     {modal && 
      <Modal 
        setModal={setModal}
        error={error}
        seterror={seterror}
        guardarGasto={guardarGasto}
        gastoEditar={gastoEditar}
        setGastoEditar={setGastoEditar}
      />}
   </div>
  );
}

export default App;
