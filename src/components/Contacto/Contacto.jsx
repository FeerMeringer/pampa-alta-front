import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert';

import './Contacto.css';

export default function Contacto() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear un objeto con los datos del formulario
    const formData = {
      name: name,
      email: email,
      message: message,
      subject: subject,
    };
    const url = 'https://pampa-alta-back.onrender.com/contacts'
    // Enviar la solicitud al servidor
    axios.post(url, formData)
      .then((response) => {
        // Mostrar una alerta de éxito
        Swal.fire('¡Éxito!', 'El formulario se ha enviado correctamente.', 'success');

        // Resetear los campos del formulario
        setName('');
        setEmail('');
        setMessage('');
        setSubject('');

        // Aquí puedes agregar lógica adicional después de enviar con éxito el formulario
        console.log(response.data);
      })
      .catch((error) => {
        // Mostrar una alerta de error
        Swal.fire('¡Error!', 'Hubo un problema al enviar el formulario.', 'error');

        // Aquí puedes agregar lógica adicional para manejar errores de la solicitud
        console.error(error);
      });
  };

  return (
    <div className='form'>
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="contact-container">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="subject">Asunto:</label>
          <select
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="">Seleccionar</option>
            <option value="option1">Instalacion/Servicio</option>
            <option value="option2">Paneles Solares</option>
            <option value="option3">Inversores</option>
            <option value="option4">Baterias De Litio</option>
            <option value="option5">Termotanques</option>
            <option value="option6">Climatizadores</option>
          </select>
        </div>
        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      <div className="info-container">
        <h2>Contactanos</h2>
        <p>Mejora la eficiencia energética de tu hogar y reduce tu factura de la luz</p>
      </div>
    </div>
  );
}