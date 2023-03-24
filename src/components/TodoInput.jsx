import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/features/todos';

function TodoInput({setShowInput}) {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) =>{
    if(event.key === "Enter" && title.trim()){
      dispatch(addTodo({title}))
      setTitle('')
    }
  }

  return (
    <div className="w-full absolute inset-0">
      <input 
        type="text"
        placeholder='Type in something...'
        value={title}
        className="w-full bg-white py-4 px-6 outline-0 text-gray-600 font-semibold animate-grow"
        autoFocus onBlur={() =>!title && setShowInput(false)} onChange={e => setTitle(e.target.value)} 
        onKeyDown={handleSubmit} 
      />
    </div>
  )
}

export default TodoInput