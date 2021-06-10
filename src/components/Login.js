import React,{useState} from 'react';



const sendLogin = (login, password) => {

    var payload = {
        "identifier": login,
        "password": password
    };

    var data = new FormData();
    data.append( "json",  payload );

    fetch("https://recruitment.ultimate.systems/auth/local",
    {
        method: "POST", 
        body: data
    })
    .then(response => console.log(response))
}

const Login = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

        return(
        <React.Fragment>
            <input 
            name="login" 
            placeholder="Email or Username" 
            type="text" required
            onSubmit={e=>setLogin(e.target.value)}/>
            <input 
            name="password"
            placeholder="Password" 
            type="password" required
            onSubmit={e=>setPassword(e.target.value)}/>
            <button onClick={sendLogin}>
                Login
            </button>
        </React.Fragment>
    );
}

export default Login;