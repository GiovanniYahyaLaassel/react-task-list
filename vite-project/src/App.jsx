import { useState } from 'react';
import  tasks  from './data/tasks';
import './App.css'

// filtro i task richiesti 
function App() {

  // const [count, setCount] = useState(0)
    const currentTasks = tasks.filter((task) => {
      // console.log('Hello task:', task); 
      return task.state === 'backlog' || task.state === 'in_progress';
    });
    // console.log('task filtrati:', currentTasks);


    // filtro i task complted 
    const compltedTasks = tasks.filter((task) => {
      // console.log('task completato', task);

      return task.state === 'completed';
    });
    // console.log('Completato:',compltedTasks);

    // Creazione del contnuto in pagina 
    return (  
      <>
        <div>
          <h1>Task Manager</h1> 
          {/* lista dei task in corso */}
          <h2>Current Tasks ({currentTasks.length})</h2>

          <ul>
            {currentTasks.map((task) => (
              <li key={task.id}>
                {/* mostro il titolo, priorità e tempo */}
                  <strong>{task.title}</strong> - Priority: {task.priority}, Est. time: {task.estimatedTime}
                </li>))}
          </ul>

          {/* lista dei task completati */}
          <h2>Completed Tasks ({compltedTasks.length})</h2>

          <ul>
            {compltedTasks.map((task) => (
              <li key={task.id}>
                <strong>{task.title}</strong> - Priority: {task.priority}, Est. time: {task.estimatedTime}
              </li>
            ))}
          </ul>
        </div>
      </>
    )
    }

export default App;
