import {useState} from 'react';
import './App.css';
/* components */
import {Form} from './components/input-form.js';
function App() {
  const [tasks,setTasks]=useState([]);
  function handleSubmit(e){
    e.preventDefault();
    const taskInformation={
      taskName:e.target.elements['taskName'].value,
      taskDate:e.target.elements['taskDate'].value
    }
    /* if taskinformation is defined/is not in the tasksalready*/
    
    if(taskInformation.taskName){
      setTasks((prev)=>[...prev,taskInformation])
    }
    
  };
  const taskList=tasks.map((task,key)=>{
   return ( 
       <li className="task" key={key}>
        <button className="task-status-button">
            <i className="fa-solid fa-circle-dot"></i>
        </button>
        <div className="task-info" >
            <div className="task-top">
                <h4 className="task-heading">{task.taskName}</h4>
                <div className="action-buttons">
                   {/*icon-1 and icon-2*/}
                    <i className="fa-solid fa-trash"></i>
                    <i className="fa-solid fa-pen-to-square"></i>
                </div>
            </div>
            <div className="date">
                <div className="date-icon"></div>
                <div className="date-text">{task.taskDate}</div>
            </div>
        </div>
    </li>)
  })
  return (
    <div id="app">
        <div className="app-elements-wrapper">
            <section className="top">
                <Form handleSubmit={handleSubmit} text='text'/>
            </section>
            <section className="tasks-wrapper">
                <br/>
                <h3 className="tasks-heading" style={{color:"white"}}>Your Tasks</h3>
                <br/><br/>
                <ul>
                    {taskList}
                    <li className="task">
                        <button className="task-status-button">
                            <i className="fa-solid fa-circle-check"></i>
                        </button>
                        <div className="task-info complete" >
                            <div className="task-top">
                                <h4 className="task-heading">This will be your task name</h4>
                                <div className="action-buttons">
                                    {/*icon-1 and icon-2 */}
                                    <i className="fa-solid fa-trash"></i>
                                    <i className="fa-solid fa-pen-to-square"></i>
                                </div>
                            </div>
                            <div className="date">
                                <div className="date-icon"></div>
                                <div className="date-text">7/jun/2021</div>
                            </div>
                        </div>
                    </li>


                </ul>
            </section>
        </div>
    </div>
  );
}

export default App;
