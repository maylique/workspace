
import './App.css'
import TodoList from './components/todoList/TodoList'
import toDos from './assets/data/Todo'

function App() {

  return (
    <>
     <TodoList toDos = {toDos} />
    </>
  )
}

export default App
