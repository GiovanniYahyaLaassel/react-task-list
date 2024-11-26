import { useState } from 'react';
import  tasks  from './data/tasks';
import './App.css'

// filtro i task richiesti 

function App() {
  // const [count, setCount] = useState(0)

    const currentTask = tasks.filter((task) => {
      // console.log('Hello task:', task); 
      return task.state === 'backlog' || task.state === 'in_progress';
    });

    // console.log('task filtrati:', currentTask);

    // filtro i task complted 

    const compltedTasks = tasks.filter((task) => {
      // console.log('task completato', task);

      return task.state === 'completed';
    });

    console.log('Completato:',compltedTasks);
    }

export default App;
