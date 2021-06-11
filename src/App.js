import React, {useState} from 'react';
import Form from './components/Form';
import Logo from './components/Logo';
import Login from './components/Login';
import Register from './components/Register';
import './styles/style.css';
import Arrow from './assets/arrow.png';
import Todo from './components/Todo';


const App = () => {
    const [Authentication, setAuthentication] = useState(false);
    const [showRegister, setRegister] = useState(false);

    const toggleRegister = () => {
        setRegister(!showRegister);
    }    
    const getTodoLists = async (Authentication) => {
           await fetch('https://recruitment.ultimate.systems/to-do-lists',{
            headers: new Headers ({
                "Authorization": `Bearer ${Authentication.jwt}`
            }),
            mode: "cors",   
            method: "GET",
       })
        .then(res => res.json().user);}

    //If the user is logged in display the todo app, else display the login or register form
   if (Authentication) {
       return (
       <React.Fragment>
       <Logo/>
       <Todo 
       todolists={() => getTodoLists(Authentication)}
       auth={Authentication}/>
       </React.Fragment>)
   }else {
       if(showRegister){
            return (
                <React.Fragment>
                    <Logo/>
                    <Register>
                        <i 
                         className="backArrow"
                         onClick={toggleRegister}>
                         <img src={Arrow} alt="back arrow"/>
                        </i>
                    </Register>
                </React.Fragment>
            );
        }
        else{
            return (
                <React.Fragment>
                    <Logo/>             
                    <Form title="Login">
                        <Login 
                        //Weird hack that technically takes props from the child and passes them to the parent (it actually passes a function that in turn returns the data we need)
                        authenticate={Authentication => setAuthentication(Authentication)}/>
                        <span className="or">
                            or
                        </span>
                        <span className="registerLink" onClick={toggleRegister}>
                           create an account
                        </span>
                    </Form>
                </React.Fragment>
            );
        }   
    }
}

export default App;