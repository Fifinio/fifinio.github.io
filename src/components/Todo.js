import React from 'react';
import TodoList from './TodoList';

const Todo = (props) => {
    console.log(props)
    return(
        <div className="todo">
            <input type="text"/>
            <select>
                <option value="">Name</option>
                <option value="saab">Creation date</option>
                <option value="mercedes">B</option>
                <option value="audi">Audi TT</option>
            </select>
            <TodoList/>
        </div>
    )
}

export default Todo;