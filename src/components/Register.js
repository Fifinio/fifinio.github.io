import React,{useState} from 'react';

const Register = props => {
  	const [login, setLogin] = useState('');
  	const [email, setEmail] = useState('');
  	const [password, setPassword] = useState('');
  	const [confirmPassword, setConfirmPassword] = useState('');
	// const sendRegister = (login, email, password, confirmPassword) => {
	// 	if(password===confirmPassword){
	// 		const registerUrl = "https://recruitment.ultimate.systems/auth/local/register";
	// 		fetch(registerUrl, {
	// 			method: 'POST',
	// 			body: {
	// 				"username": ,
	// 				"email" : ,
	// 				"password": password
	// 			}
	// 		}).then(response => console.log(response))
	// 	}
	// }
    
	return (
    	<div className="form" method="post">
    		{props.children}
        <h4>Create a new account</h4>
        
		<input name="username" 
			placeholder="Username" 
			type="text" required
			onChange={e=>setLogin(e.target.value)}/>
        <input 
			name="email" 
			placeholder="Email" 
			type="text" required
			onChange={e=>setEmail(e.target.value)}/>
        <input 
			name="password" 
			placeholder="Password" 
			type="password" required 
			onChange={e=>setPassword(e.target.value)}/>
        <input 
			name="confirmPassword" 
			placeholder="Repeat Password" 
			type="password" required 
			onChange={e=>setConfirmPassword(e.target.value)}/>
        <button >Create</button>
      </div>
    );
}

export default Register;