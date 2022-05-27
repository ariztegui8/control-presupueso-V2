import { useState } from "react";
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

  const handleNuevoGasto = ()=>{
    setModal(true)
  }

  const guardarGasto = gasto =>{
    gasto.id = generarId();
    gasto.fecha = Date.now();
    setGastos([...gastos , gasto])
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
      />}
   </div>
  );
}

export default App;
