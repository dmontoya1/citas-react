import React, {Fragment, useState} from 'react'

const Form = () => {
  // Crear State de Citas

  const [cita, updateCita] = useState({
    pet: '',
    name: '',
    date: '',
    time: '',
    sintomas: '',
  })

  // Función para actualizar el State
  const handleChange = e => {
    console.log("Escribiendo")
    updateCita({
      ...cita, 
      [e.target.name] : [e.target.value]
    })
  }

  // Extraer valores
  const { pet, name, date, time, sintomas } = cita;

  return ( 
    <Fragment>
      <h2>Crear Cita</h2>
      <form>
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