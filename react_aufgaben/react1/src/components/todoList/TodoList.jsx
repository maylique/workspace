import TodoItem from "../todoItems/TodoItem";

const TodoList = ({toDos}) => {
    return ( 
        <>
        <h1>My Todos</h1>
        {toDos.map((toDo, index) => {
            return (
                <ul key={index}>
                    <TodoItem 
                    toDo = {toDo.title}
                    />
                </ul>
            )
        })}
        </>
     );
}
 
export default TodoList;