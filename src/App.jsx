import { useState } from "react";
import Header from "./components/Header";
import imgAgregar from './agregar.jpg'



function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [isvalidPresupuesto, setIsvalidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false)

  const handleNuevoGasto = ()=>{
    setModal(true)
  }

  return (
   <div className="contenedor">
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isvalidPresupuesto={isvalidPresupuesto}
        setIsvalidPresupuesto={setIsvalidPresupuesto}
      />

     {isvalidPresupuesto && 
       <div className="icon">
       <img src={imgAgregar} alt=""
        onClick={handleNuevoGasto}
       />
     </div>
     }

     {modal && <p>Desde Modal</p>}
   </div>
  );
}

export default App;
