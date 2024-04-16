import React, {useState} from 'react'

const Todo = () => {

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
        setTodos([...todos, {
            id: ,
            todo: newTodo
        }])
    }
    console.log(todos.length);
    
    return (
        <div>
            <h1 className="text-center"> {todos.length} To-do</h1>
            <ul className="list-group">
                {myTodos}
            </ul>
        </div>
    )
}

export default Todo
