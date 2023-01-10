import { useNavigate } from "react-router-dom";
import { useState } from "react";
import '../styles/userLogin.css'
const UserLogin=()=>{
    let[email,setEmail]=useState('');
    let[password,setPassword]=useState('');

    let navigate=useNavigate()
    let login=(e)=>{
        e.preventDefault();
        let data={email,password}
        console.log(data);
        navigate('/user/')
    }
    return(
        <div className="userLogin">
            <div className="box">
                <h1>Login as User</h1>
                <div className="form">
                    <img src="/images/usericon.png" alt="" />
                    <form action="" onSubmit={login}>
                        <div>
                            <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="form-control"/>
                        </div>
                        <br />
                        <div>
                            <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="form-control" />
                        </div>
                        <br />
                        <button className="btn4">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default UserLogin;