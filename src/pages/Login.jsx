import { useState } from "react";
import {useNavigate} from "react-router-dom";
import "./login.css";

function Login (){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(){
    if(email === "admin@gmail.com" && password === "12345") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      console.log("Invalid Credentials");
    }
  }
  return(
    <div className="login-container">
      <div className="login-card">
        <h1>Employee Management</h1>
        <h2>Login</h2>
        <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
export default Login;