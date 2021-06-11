import React from 'react';
import TodoList from './TodoList';

const Todo = (props) => {
    const jwt = props.auth.jwt;
    const todolists = props.todolists;
    const lists = <TodoList/>;
       const TodoAdd = async (jwt) => {
           await fetch('https://recruitment.ultimate.systems/to-do-lists',{
            headers: new Headers ({
                'Authorization': `Bearer ${jwt}`
            }),
            mode: "cors",
            method: "POST",
        })
       }
    return(
        <React.Fragment>
            <div>
                Logout
            </div>
            <input type="text"/>
            <button>
                Sort by
            </button>
            <div className="todo">
                {lists}
            </div>
            <button onClick={() => TodoAdd(jwt)}>+</button>
        </React.Fragment>
    )
    }

export default Todo;