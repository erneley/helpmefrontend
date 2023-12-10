import React, { useState } from 'react';
import axios from 'axios';

function Usuarios() {
  const [descripcion, setDescripcion] = useState('');
  const [nombre, setNombre] = useState('');

  const handleSubmit = async (event) => {
   // event.preventDefault();

    const data = {
      descripcion: descripcion,
      nombre: nombre
      
    };

    const response = await axios.post(
      'http://localhost:8080/roles',
      data
    );

    console.log(response.data);
  };

  return (
    <div id="container">
      <div class="wrapper">
    <form class="login" onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
      </label>
      <br />
      <label>
        Body:
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
    </div>
  );
}



export default Usuarios;