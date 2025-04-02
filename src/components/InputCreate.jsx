import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const InputCreate = ({ onTaskAdd }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const navigate = useNavigate(); 
  
 const handleSubmit = async (e) => {
    e.preventDefault();
    if (!taskTitle.trim()) return; // Ayuda a evitar enviar tareas vacías

    const newTask = { title: taskTitle };

    try {
      const response = await fetch('http://localhost:3000/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });

      
      if (!response.ok) {
        const errorMessage = await response.text();
        alert(`Error al enviar la tarea: ${errorMessage}`);
        return;
      }
        const createdTask = await response.json();
        onTaskAdd(createdTask); // se llamamos a la función para actualizar la lista de tareas
        setTaskTitle(''); //se limpia el input despues de usarse
        navigate('/');
      
    } catch (error) {
      console.error('Error al enviar la tarea:', error);
    }
  };



  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe una nueva tarea"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button type="submit" className='agregar'>Agregar Tarea</button>
    </form>
  );
};

export default InputCreate;

