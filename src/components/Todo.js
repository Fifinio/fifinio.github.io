import React, {useState, useEffect} from 'react';
import TodoList from './TodoList';

const Todo = (props) => {
    const [Jwt,setJwt] = useState(props.auth.jwt);
    const [Todolists,setTodolists] = useState(props.todolists);
    const lists = <TodoList/>;
       const TodoAdd = async (Kwt) => {
           await fetch('https://recruitment.ultimate.systems/to-do-lists',{
            headers: new Headers ({
                'Authorization': `Bearer ${Jwt}`
            }),
            mode: "cors",
            method: "POST",
        })
       }
    return(
        <React.Fragment >
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
            <button onClick={() => TodoAdd(Jwt)}>+</button>
        </React.Fragment>
    )
    }

export default Todo;