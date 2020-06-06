import React, {Fragment, useState} from 'react';
import {v4 as uuid} from "uuid";

const Form = ({createCita}) => {
  // Crear State de Citas

  const [cita, updateCita] = useState({
    pet: '',
    name: '',
    date: '',
    time: '',
    sintomas: '',
  })

  const [error, updateError] = useState(false)

  // Función para actualizar el State
  const handleChange = e => {
    const {name, value} = e.target
    updateCita({
      ...cita, 
      [name] : value
    })
  }

  // Extraer valores
  const { pet, name, date, time, sintomas } = cita;

  // Cuando el usuario presiona agregar cita
  const submitAppointment = e => {
    e.preventDefault();

    // Validar 
    if(pet.trim() === '' || name.trim() === '' || date.trim() === '' || time.trim() === ''|| sintomas.trim() === '' ){
      updateError(true)
      return;
    }

    // Eliminar mensaje previo de error
    updateError(false)

    // Asignar ID
    cita.id = uuid();

    // Crear Cita 
    createCita(cita);

    // Reiniciar el Form
    updateCita({
      pet: '',
      name: '',
      date: '',
      time: '',
      sintomas: '',
    })

  }

  return ( 
    <Fragment>
      <h2>Crear Cita</h2>

      { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

      <form
        onSubmit={submitAppointment}
        method="POST"
      >
        <label>Nombre Mascota</label>
        <input 
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={handleChange}
          value={pet}
        />
        <label>Nombre Dueño</label>
        <input 
          type="text"
          name="name"
          className="u-full-width"
          placeholder="Nombre Dueño"
          onChange={handleChange}
          value={name}
        />
        <label>Fecha de alta</label>
        <input 
          type="date"
          name="date"
          className="u-full-width"
          onChange={handleChange}
          value={date}
        />
        <label>Hora de alta</label>
        <input 
          type="time"
          name="time"
          className="u-full-width"
          onChange={handleChange}
          value={time}
        />
        <label>Sintomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={handleChange}
          value={sintomas}
        ></textarea>
        <button
          type="submit"
          className="u-full-width button-primary"
          onChange={handleChange}
        >Agregar Cita</button>
      </form>
    </Fragment>
  );
}
 
export default Form;