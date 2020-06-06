import React, {Fragment, useState} from 'react';

import Cita from "./components/Cita";
import Form from './components/Form';

function App() {

  // Arreglo de citas
  const [citas, saveCitas] = useState([])

  // Función que toma las citas actuales y agregue una nueva

  const createCita = cita => {
    console.log("Desde App", cita);
    saveCitas([...citas, cita])
  }

  // función para eliminar una cita por id

  const deleteCita = id => {
    console.log(id)
  }

  return (
    <Fragment>

      <h1>Administrador de pacientes</h1>
      
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form 
              createCita={createCita}
            />
          </div>
          <div className="one-half column">
            <h2>Adminitra tus citas</h2>
            {citas.map(cita => (
              <Cita 
                key={cita.id}
                cita={cita}
                deleteCita={deleteCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
