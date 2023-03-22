import { useState } from 'react'
import { useSelector } from 'react-redux'
import AddTodo from './components/AddTodo'
import Hints from './components/Hints'
import Title from './components/Title'
import TodoInput from './components/TodoInput'
import TodosList from './components/TodosList'
import Wrapper from './components/Wrapper'

function App() {
  const [showInput, setShowInput] = useState(false)
  const todos = useSelector((state) => state.todos);

  return (
    <div className="w-full min-h-screen bg-gray-200 flex flex-col items-center justify-center">
      <Wrapper>
        <Title />
        <Hints />
        <div className="my-5 relative">
          <AddTodo setShowInput={setShowInput} showInput={showInput} />
          {showInput && <TodoInput setShowInput={setShowInput} addTodo={() =>{}} />}
        </div>
        <TodosList todos={todos} />
      </Wrapper>
    </div>
  )
}

export default App
