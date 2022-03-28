import {useState} from 'react';
import { createElements,eventHandlers } from './Functions/main functions';
import './App.css';
/* components */
import {Form} from './components/input-form.js';

function App() {
  const [tasks,setTasks]=useState([]);
  const [taskNumber,setTaskNumber]=useState(0);
  function handleSubmit(event){
    event.preventDefault();
    const {taskName,taskDate}=event.target;
    const taskInformation={
      taskName:taskName.value,
      taskDate:taskDate.value,
      taskId:`task-${taskNumber}`
    } 
    /* if taskinformation is defined/is not in the tasksalready*/
    if(taskInformation.taskName){
        setTasks((prev)=>[...prev,taskInformation]);
        setTaskNumber((prev)=>prev+1)
    };
  };
  let taskList=createElements(tasks,eventHandlers,deleteTask);
  function deleteTask(event){
    //get the id of the task
    let targetId=eventHandlers.getTargetParentId(event);
    //filter out the task by id 
      setTasks((prev)=>prev.filter(task=>task.taskId!==targetId));
  }

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
                </ul>
            </section>
        </div>
    </div>
  );
}

export default App;
