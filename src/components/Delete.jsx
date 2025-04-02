import React from 'react';

const DeleteTask = ({ id, onDelete }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/id/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        onDelete(id); 
      } else {
        console.error('Error eliminando la tarea');
      }
    } catch (error) {
      console.error('Error de conexión con el servidor:', error);
    }
  };

  return <button onClick={handleDelete} className='borrar'>❌</button>;
};

export default DeleteTask;
