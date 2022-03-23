export function Form(props){
    return (
        <form onSubmit={props.handleSubmit}>
        <div className="task-name inputs">
            <label htmlFor="taskName">task name</label>
            <br/>
            <input type="text" name="taskName" id="taskName" placeholder="activity................"/>
        </div>
        <div className="task-date inputs">
            <label htmlFor="taskDate">task date</label>
            <br/>
            <input type="date" name="taskDate" id="taskDate" />
        </div>
        <button type="submit">ADD TASK</button>
        </form> 
    )
}

