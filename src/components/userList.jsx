import { useState,useEffect } from "react"
import '../styles/userList.css'
const UserList =()=>{
    let [user,setUsers]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{
            let response= await fetch('http://localhost:1000/Users')
            let data= await response.json();
            setUsers(data);
        }
        fetchData()
    },[user])
    let handleDelete=(id)=>{
        fetch(`http://localhost:1000/users/${id}`,{
            method:'DELETE'
        });
    }
    return(
        <div className="userList">
            <h1>User List :{user.length}</h1>
            {user.map(data=>(
                <div className="user_card">
                    <h1>Name: {data.name}</h1>
                    <h2>Age: {data.age}</h2>
                    <h2>Phone Number: {data.PhoneNumber}</h2>
                    <h2>Email: {data.email}</h2>
                    <button onClick={()=>handleDelete(data.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}
export default UserList;