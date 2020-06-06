import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita, deleteCita}) => (

    <div className="cita">
      <p>Mascota: <span>{cita.pet}</span> </p>
      <p>Dueño: <span>{cita.name}</span> </p>
      <p>Fecha: <span>{cita.date}</span> </p>
      <p>Hora: <span>{cita.time}</span> </p>
      <p>Sintomas: <span>{cita.sintomas}</span> </p>

      <button
        className="button delete u-full-width"
        onClick={ () => deleteCita(cita.id) }
      >
        Eliminar &times;
      </button>
  </div>
);


Cita.prototypes = {
  cita: PropTypes.object.isRequired,
  deleteCita: PropTypes.func.isRequired
}
 
export default Cita;