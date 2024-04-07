import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ('./SignUp.css')

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    fetch("http://localhost:5000/signup", {
      method: "Post",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: email,
        name: username,
        password:password
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.message=="ok"){
          alert("Succefully signed up");
          window.location.href = "./login"
        }
        
      });
  };

  return (
    <div className="signup-container">
      <h1 className="signup-header">Sign Up</h1>
      <input 
        className="signup-input"
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        className="signup-input"
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        className="signup-input"
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button className="signup-button" onClick={handleSubmit}>Sign Up</button>
    </div>
  );
};

export default SignUp;
