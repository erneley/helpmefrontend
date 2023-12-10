import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Milista() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/roles')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>NOMBRE</th>
          <th>DESCRIPCION</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td> 
            <td>{user.nombre}</td>
            <td>{user.descripcion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Milista;