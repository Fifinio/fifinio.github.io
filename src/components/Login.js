import React,{useState} from 'react';

const sendLogin = async (login, password) => {
    await fetch("https://recruitment.ultimate.systems/auth/local", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {
            identifier: login,
            password: password,
            },
        )
    })
    .then((response) => response.json())
    .then(data => data.user)
    .catch((err) => console.error(err))
    }

const Login = props => {

    
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

        return(
        <React.Fragment>
            <input 
            name="login" 
            placeholder="Email or Username" 
            type="text" required
            onChange={e =>setLogin(e.target.value)}/>
            <input 
            name="password"
            placeholder="Password" 
            type="password" required
            onChange={e=>setPassword(e.target.value)}/>
            <button onClick={() => props.authenticate(sendLogin(login, password))}>
                Login
            </button>
        </React.Fragment>
    );
}

export default Login;