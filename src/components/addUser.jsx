import '../styles/addUser.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AddUser = () => {
    let navigate=useNavigate();
    let[name,setName]=useState("")
    let[age,setAge]=useState("")
    let[email,setEmail]=useState("")
    let[phoneNumber,setNumber]=useState("")

    let handleSubmit=(e)=>{
        e.preventDefault();

        let userData={
            name,age,email,phoneNumber
        }
        fetch('http://localhost:1000/users/',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(userData)
        })
        navigate('/admin/user-list')
    }
    return ( 
        <div className="addUser">
            <h1>Add User</h1>
            <div className="form">
                <form action="" onSubmit={handleSubmit}>
                <div className='name'>
                <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className='age'>
                <input type="number" placeholder='Age' min='1' value={age} onChange={(e)=>setAge(e.target.value)} />
                </div>
                <div className='email'>
                <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='phoneNumber'>
                <input type="tel" placeholder='Phone Number' value={phoneNumber} onChange={(e)=>setNumber(e.target.value)}  min='10' max='10' className='form-control' />
                </div>
                <button className='btn btn-sucess'>Add User</button>
                </form>
            </div>
        </div>
     );
}
export default AddUser;