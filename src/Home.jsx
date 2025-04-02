import {Link} from 'react-router-dom'
import DeleteTask  from './components/Delete';

const Home = ({data,setTasks}) => {
  
  const handleDelete = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task._id !== id));
  };
  
  return (
    <div className='lista'>
    <h2>Lista de datos</h2>
    <ul>
      {data.map(item => (
        <li key={item._id}>
          <Link to={`/${item._id}`}>{item.title}</Link>
          <DeleteTask id={item._id} onDelete={handleDelete} />
        </li>
      ))}
    </ul>
    </div>
  )
};

export default Home;
