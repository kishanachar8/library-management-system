import { useState,useEffect } from "react";
import '../styles/bookList.css'
import { useNavigate } from "react-router-dom";
import ReadBook from "./readBook";
import { useLocation } from "react-router-dom";
const BookList =()=>{
    let location=useLocation();
    let navigate=useNavigate();
    let [book,setBooks]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{
            let response= await fetch('http://localhost:1000/books')
            let data= await response.json();
            setBooks(data);
        }
        fetchData()
    },[book])
    let handleDelete=(id,title)=>{
        fetch(`http://localhost:1000/books/${id}`,{
            method:'DELETE'
        });
    }
    let read=(id)=>{
        if(location.pathname=='/admin/book-list'){
            navigate(`/admin/book-list/${id}`) 
        }
        else{
            navigate(`/user/book-list/${id}`)
        }
    }
    return(
        <div className="bookList">
            <h1><u><b><big>Book List:{book.length}</big></b></u></h1>
            {book.map(data=>(
                <div className="book_card">
                    <div className="image">
                    <img src={data.thumbnailUrl} alt="" />
                    </div>
                    <div className="desc">
                    <h1><u><b><big>Title:</big></b></u> {data.title}</h1>
                    <h6><u><b><big>Authors:</big></b></u>{data.authors}</h6>
                    <h6><u><b><big>Page Count:</big></b></u>{data.pageCount}</h6>
                    <button onClick={()=>read(data.id)}>Read More</button>
                    {location.pathname=='/admin/book-list' && <button onClick={()=>handleDelete(data.id,data.title)}>Delete</button>}
                    </div>
                    
                </div>
            ))}
        </div>
    )
}
export default BookList;