import { useState,useEffect } from 'react'
import './App.css'

function App() { 
  const date = new Date();
  const todaydate = date.getDate()
  const month = date.toLocaleString('en-US', { month: 'short' });
  const year = date.getFullYear();
  const calender = `${month} ${todaydate}, ${year}`;
  const hrs = date.getHours();
  const min = date.getMinutes().toString().padStart(2, '0');
  const times = `${hrs}:${min}`;
  
  const [tasks, setTasks] = useState([]);
  const addTask = () => {
    const newTask = {
      id: Math.random(),
      text: "Enter your task here...",
      time: times,
      checked: false
    };
    
    setTasks(prev => [...prev, newTask]);
  };

  const updateTaskText = (id, newText) => {
    setTasks(prev => prev.map(t => 
      t.id === id ? { ...t, text: newText } : t
    ));
  };

  const toggleCheck = (id) => {
    setTasks(prev => prev.map(t => 
      t.id === id ? { ...t, checked: !t.checked } : t
    ));
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  return (
    <>
      <div id='nav'><h1>Todo--List</h1></div>
      <div id='body'>
        <h3>Today</h3>
        <p className='date'>{calender}</p>
        
        <div id='sections'>
          {tasks.map((t, index) => (
            <div key={t.id} className='tasks'>
              <input 
                type="checkbox" 
                className='check' 
                checked={t.checked}
                onChange={() => toggleCheck(t.id)}
              />
              <input 
                type="text" 
                className='enter_task' 
                value={t.text}
                onChange={(e) => updateTaskText(t.id, e.target.value)}
                style={{
                  textDecoration: t.checked ? 'line-through' : 'none',
                  opacity: t.checked ? 0.6 : 1
                }}
              />
              <span className='newdate'>{calender}</span>
              <span className='time'>{t.time}</span>
              <button 
                onClick={() => deleteTask(t.id)}
                className='delete-btn'
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>
              </button>
            </div>
          ))}
        </div>

        <button 
          onClick={addTask} className='add'style={{ borderRadius: '50%',backgroundColor: '#0AB6AB',border: 'none',position: 'absolute',left: '78%',top: '85%',  width: '50px',height: '50px',cursor: 'pointer',display: 'flex', alignItems: 'center',justifyContent: 'center'
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
          </svg>
        </button>
      </div>
    </>
  )
}

export default App
