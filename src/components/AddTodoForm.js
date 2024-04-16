import React, {useState} from 'react'

const AddTodoForm =() => {
    
    const [addTodo, setAddTodo] = useState('')
    console.log(addTodo);

    return (
        <form className="mt-4">
            <div className="card card-body">
                <div className="form-group">
                    <label>Ajouter Todo</label>
                    <input type="text" className="form-control" value={addTodo} onChange={(e) => setAddTodo(e.target.value)}/>
                    <input type="submit" className="btn btn-success mt-4" />
                </div>
            </div>
        </form>
    )
}

export default AddTodoForm
