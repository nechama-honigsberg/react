import { useState } from 'react';

const FormTask = () => {
    const [newTask, setNewTask] = useState({ title: '', description: '' })

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const updateValues = (event) => {
        setNewTask({
            ...newTask,
            [event.target.name]: event.target.value
        })
    }
    return (
        <form onSubmit={handleSubmit} noValidate>
            <h1>Add new task</h1>
            <div className="form-group" >
                <label htmlFor="title-input" >Title</label>
                <input type="title" name="title" id="title-input" value={newTask.title}
                    onChange={updateValues}></input>
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input type="description" name="description" id="description"
                    value={newTask.description} onChange={updateValues}></input>
            </div>
            <button type="submit" >submit</button>
        </form>)
}
export default FormTask;