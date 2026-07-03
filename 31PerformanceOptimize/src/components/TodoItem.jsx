import React from 'react'

const TodoItem = React.memo(function TodoItem({
    todo,
    isEditing,
    editedTitle,
    onToggle,
    onDelete,
    onEditChange,
    onEditClick
}) {
    return (
        <div className='w-full flex items-center justify-center'>
            <li
                className='flex  gap-1 w-full max-w-3xl bg-gray-600 rounded-md p-2'>
                <div className='flex flex-col sm:flex-row justify-between items-center gap-3 w-full'>
                    <div>
                        <input type="checkbox"
                            checked={todo.completed}
                            onChange={() =>onToggle(todo.id)}
                        />
                        <span className={todo.completed ? 'line-through' : ''}>
                            Title:
                            <input type="text"
                                value={isEditing ? editedTitle : todo.title}
                                onChange={(e) => onEditChange(e.target.value)}
                                disabled={!isEditing}
                                className={`w-40 md:w-60 ${todo.completed ? 'line-through' : ''}`}
                            />
                        </span>

                    </div>

                    <div className='flex gap-2'>
                        <button
                            disabled={todo.completed}
                            onClick={()=>onEditClick(todo)}
                            className='px-2 py-1 bg-blue-700 rounded-md'>
                            {isEditing ? 'Save' : 'Edit'}
                        </button>
                        <button onClick={() => onDelete(todo.id)}
                            className='px-2 py-1 bg-red-700 rounded-md'>Delete</button>
                    </div>

                </div>

            </li>
        </div>
    )
})

export default TodoItem
