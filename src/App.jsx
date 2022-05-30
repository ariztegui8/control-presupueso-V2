import { useState, useEffect } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import {generarId} from './components/helpers/index';
import ListadoGastos from "./components/ListadoGastos";



function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [isvalidPresupuesto, setIsvalidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [error, seterror] = useState(false);
  const [gastos, setGastos] = useState([]);
  const [gastoEditar, setGastoEditar] = useState({});

  useEffect(()=>{
    if(Object.keys(gastoEditar).length > 0){
      setModal(true)
    }
  },[gastoEditar])

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
          <ListadoGastos
            gastos={gastos}
            setGastoEditar={setGastoEditar}
            eliminarGasto={eliminarGasto}
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
