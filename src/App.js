import React, {useState} from 'react';
import Form from './components/Form';
import Logo from './components/Logo';
import Login from './components/Login';
import Register from './components/Register';
import './styles/style.css';
import Arrow from './assets/arrow.png';
import Todo from './components/Todo';


const App = () => {
    const [isAuthenticated, SetAuthenticated] = useState(false);
    const [showRegister, setRegister] = useState(false);

    const toggleRegister = () => {
        setRegister(!showRegister);
    }    

    //If the user is logged in display the todo app, else display the login or register form
   if (isAuthenticated) {
       return (
       <React.Fragment>
       <Logo/>
       <Todo/>
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
                        <Login />
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