function TodoFooter({todos, onClearCompleted}){

  const completedSize =  todos.filter(todo => {
        return todo.isCompleted
    }).length
    return (
        <div>
            <span>{completedSize}/{todos.length} Completed</span>
            <button className="clearCompleted" onClick={onClearCompleted}>Clear Completed</button>
        </div>
    )
}
export default TodoFooter;