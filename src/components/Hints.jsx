function Hints() {

    const HINTS = [
        "Click \"add todo\" to start typing a new task",
        "Tick the box or click on the task to complete it",
        "Double-click on the task to edit it"
    ];

  return (
    <div className='my-10 flex flex-col items-center'>
        <div className="text-2xl font-bold text-gray-600 mb-3">Hints</div>
        <div>
            {HINTS.map((hint, index) => <div key={index} className="flex items-center justify-center gap-2">
                <span className="text-red-500">*</span>
                <span className='text-gray-500'>{hint}</span>
            </div>)}
        </div>
    </div>
  )
}

export default Hints