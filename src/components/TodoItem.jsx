import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodoStatus, updateTodoTitle } from '../redux/features/todos';

function TodoItem({title, done, id}) {
    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState(title);
    const dispatch = useDispatch();

    const handleUpdateTitle = () =>{
        value && dispatch(updateTodoTitle({id, title: value}));
        setEditing(false)
    }

  return (
    <div className='flex items-center justify-between border-b border-gray-300 last:border-0 py-3'>
        <div className={`flex gap-5 items-center cursor-pointer ${done && !editing ? 'line-through opacity-60': ''}`}>
            <input type="checkbox" name="st" id={id} checked={done} onChange={() =>dispatch(toggleTodoStatus(id))} />
            {
                editing ?
                <input type="text" className="outline-0 text-xl font-semibold bg-gray-200" value={value} onChange={e => setValue(e.target.value)} onBlur={handleUpdateTitle} autoFocus onKeyDown={e => e.key === 'Enter' && handleUpdateTitle()} />:
                <label htmlFor={id} className='font-semibold text-xl' onDoubleClick={setEditing}>{title}</label>
            }
        </div>
        <div className="justify-self-end cursor-pointer text-red-500" onClick={() => dispatch(deleteTodo(id))}>
            <AiOutlineClose />
        </div>
    </div>
  )
}

export default TodoItem