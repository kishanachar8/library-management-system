import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/adminLogin.css'
const AdminLogin=()=>{

    let[email,setEmail]=useState('');
    let[password,setPassword]=useState('');

    let navigate=useNavigate();

    let login=(e)=>{
        e.preventDefault();
        let data={email,password}
        console.log(data);
        //admin login validation
        if(email === 'admin@admin.com' && password === 'admin')
        {
            navigate('/admin/')
        }
        else{
            alert('Invalid Credintials')
        }
    }
    return(
        <div className="adminLogin">
            <div className="box">
                <h1>Login as Admin</h1>
                <div className="form">
                <img src="/images/adminicon.png" alt="" />
                    <form action="" onSubmit={login}>
                        <div>
                            <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="form-control"/>
                        </div>
                        <div>
                            <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="form-control" />
                        </div>
                        <br />
                        <button className="btn3">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AdminLogin; 