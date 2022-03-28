export function ListItem(props){
    console.log(props)
    return ( 
        <li className="task not-complete" id={props.task.taskId}>
         <button className="task-status-button" >
             <i className="fa-solid fa-circle-dot unchecked" data-parentkey={props.task.taskId} onClick={props.onClick}></i>
             <i className="fa-solid fa-circle-check checked" data-parentkey={props.task.taskId} onClick={props.onClick}></i>
         </button>
         <div className={`task-info`} >
             <div className="task-top">
                 <h4 className="task-heading">{props.task.taskName}</h4>
                 <div className="action-buttons">
                    {/*icon-1 and icon-2*/}
                     <i className="fa-solid fa-trash" data-parentkey={props.task.taskId} onClick={props.onDelete}></i>
                 </div>
             </div>
             <div className="date">
                 <div className="date-icon"></div>
                 <div className="date-text">{props.task.taskDate}</div>
             </div>
         </div>
     </li>)
}