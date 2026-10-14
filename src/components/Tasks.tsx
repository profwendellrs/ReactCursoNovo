

export function Tasks(props) {
   
    return (
    <div>
        <p>{props.tasks.map((task) => (
            <p>{task.title}</p>
        ))}</p>
    </div>
    )
}