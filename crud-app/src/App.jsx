import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  }

  const addTask = () => {
    setTodoList([...todoList, newTask]);
  }
  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick = {addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <div>
              <h1>{task}</h1>
              <button>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
