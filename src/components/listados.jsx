import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';

const schema = yup.object().shape({
  nombre: yup.string().required(),
  descripcion: yup.string().required(),
});

const Forma = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
   //event.preventDefault();

    try {
      await schema.validate({ nombre, descripcion }, { abortEarly: false });
      await axios.post('http://localhost:8080/roles', { nombre, descripcion });
    
     

      
      
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const validationErrors = {};
        error.inner.forEach((innerError) => {
          validationErrors[innerError.path] = innerError.message;
        });
        setErrors(validationErrors);
      } else {
        console.error(error);
       
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} />
        {errors.nombre && <div>{errors.nombre}</div>}
      </label>
      <label>
        Email:
        <input type="text" value={descripcion} onChange={(event) => setDescripcion(event.target.value)} />
        {errors.descripcion && <div>{errors.descripcion}</div>}
      </label>
      <button type="submit">Submit</button>
    </form>
     
  );
};

export default Forma;



