export const Task = (props) => {
    return (
        <div className='task' style={{backgroundColor: props.completed === false ? 'red' : 'green'}}>
          <h1>{props.taskName}</h1>
          <button onClick={() => props.deleteTask(props.id)}>X</button>
          <button onClick={() => props.completeTask(props.id)}>Complete</button>
        </div>
      );
}