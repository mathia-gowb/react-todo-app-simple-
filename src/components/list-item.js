export function ListItem(props){
    console.log(props)
    return ( 
        <li className="task">
         <button className="task-status-button" >
             <i className="fa-solid fa-circle-dot" data-parentkey={props.keyValue} onClick={props.onClick}></i>
         </button>
         <div className={`task-info ${props.keyValue===props.targetKey?'complete':""}`} >
             <div className="task-top">
                 <h4 className="task-heading">{props.task.taskName}</h4>
                 <div className="action-buttons">
                    {/*icon-1 and icon-2*/}
                     <i className="fa-solid fa-trash"></i>
                     <i className="fa-solid fa-pen-to-square"></i>
                 </div>
             </div>
             <div className="date">
                 <div className="date-icon"></div>
                 <div className="date-text">{props.task.taskDate}</div>
             </div>
         </div>
     </li>)
}