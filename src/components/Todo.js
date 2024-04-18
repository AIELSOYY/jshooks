import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import AddTodoForm from './AddTodoForm';

const Todo = () => {

    const [warning, setWarning] = useState(false);
    const [todos, setTodos] = useState([
        {id: 1, todo: 'Acheter du lait'},
        {id: 2, todo:'Acheter du pain'},
        {id: 3, todo: 'acheter du fromage'}
    ])

    const myTodos = todos.map( todo => {
        return(
            <li className="list-group-item" key={todo.is}>{todo.todo}</li>
        )
    }) 


    const addNewTodo = (newTodo) => {
        const newId = uuidv4();
        if(newTodo !== ''){
            warning && setWarning(false)
            setTodos([...todos, {
                id: newId,
                todo: newTodo
            }])
        }
        else{
            setWarning(true);
        }
    }
    warning && <div class="alert alert-danger" role="alert">Veuillez indiquer un Todo</div>

    const warningMesg = warning && <div className='alert alert-danger' role='alert'>Veulliez indiquer un Todo</div>
    
    return (
        <div>
            {warningMesg}
            <h1 className="text-center"> {todos.length} To-do</h1>
            <ul className="list-group">
                {myTodos}
            </ul>
            <AddTodoForm addNewTodo={addNewTodo}/>
            
        </div>
    )
}

export default Todo
