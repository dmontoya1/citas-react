import React, {Fragment, useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import Cita from "./components/Cita";
import Form from './components/Form';

function App() {

  // Citas en LocalStorage

  let initialCitas = JSON.parse(localStorage.getItem('citas'));
  if(!initialCitas){
    initialCitas = [];
  }

  // Arreglo de citas
  const [citas, saveCitas] = useState(initialCitas)

  // Use effect para realizar operaciones cuando el state cambia

  useEffect(() => {
    let initialCitas = JSON.parse(localStorage.getItem('citas'));
    
    if(initialCitas){
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas] );

  // Función que toma las citas actuales y agregue una nueva

  const createCita = cita => {
    saveCitas([...citas, cita])
  }

  // función para eliminar una cita por id

  const deleteCita = id => {
    const newCitas = citas.filter(cita => cita.id !== id)
    saveCitas(newCitas)
  }

  // Mensaje condicional

  const title = citas.length === 0 ? 'No hay citas' : 'Administra tus citas'

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
            <h2>{title}</h2>
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

Form.prototypes = {
  createCita: PropTypes.func.isRequired
}

export default App;
