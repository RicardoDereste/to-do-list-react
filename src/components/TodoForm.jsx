import {useState} from 'react'

const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!value || !category) return;
        addTodo(value, category)
        setValue("")
        setCategory("")
    }

  return (
    <div className="todo-form">
        <h2>Create Tasks</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Type the title' value={value} onChange={(e) => setValue(e.target.value)}/>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select a category:</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="study">Study</option>
            </select>
            <button type="submit">Create task</button>
        </form>
    </div>
  )
}

export default TodoForm