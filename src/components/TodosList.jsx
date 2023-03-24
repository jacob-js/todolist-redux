import TodoItem from './TodoItem'

function TodosList({todos}) {

  return (
    <div className="bg-white p-5 flex flex-col">
        {todos.map((todo, index) =>(
            <TodoItem {...todo} key={index} />
        ))}
    </div>
  )
}

export default TodosList