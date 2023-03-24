import { GoPlus } from 'react-icons/go'

function AddTodo({setShowInput, showInput}) {
  return (
    <div onClick={setShowInput} className={`w-full bg-white py-4 px-6 text-gray-600 flex justify-between cursor-pointer ${showInput ? 'invisible': ''}`}>
        <div className="font-semibold">Add todo</div>
        <div className="bg-black text-white w-6 h-6 flex items-center justify-center p-2 rounded-2xl">
            <GoPlus />
        </div>
    </div>
  )
}

export default AddTodo