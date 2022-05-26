import { useState } from "react";
import Header from "./components/Header";
import imgAgregar from './agregar.jpg'
import Modal from "./components/Modal";
import {generarId} from './components/helpers/index';



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
    setGastos([...gastos , gasto])
  }

  return (
   <div className="contenedor container">
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isvalidPresupuesto={isvalidPresupuesto}
        setIsvalidPresupuesto={setIsvalidPresupuesto}
        error={error}
        seterror={seterror}
      />

     {isvalidPresupuesto && 
       <div className="icon">
       <img src={imgAgregar} alt="agregar"
        onClick={handleNuevoGasto}
       />
     </div>
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
