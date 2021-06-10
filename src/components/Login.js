import React,{useState} from 'react';



const Login = () => {

    const sendLogin = (login, password) => {
    
    console.log(login, password);
    fetch("https://recruitment.ultimate.systems/auth/local", {
  method: "POST",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(
    {
      identifier: "test1111",
      password: "test123",
    },
  ),
})
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
}
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

        return(
        <React.Fragment>
            <input 
            name="login" 
            placeholder="Email or Username" 
            type="text" required
            onChange={e=>setLogin(e.target.value)}/>
            <input 
            name="password"
            placeholder="Password" 
            type="password" required
            onChange={e=>setPassword(e.target.value)}/>
            <button onClick={sendLogin}>
                Login
            </button>
        </React.Fragment>
    );
}

export default Login;