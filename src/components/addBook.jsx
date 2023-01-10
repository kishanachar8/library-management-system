import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addBook.css'
const AddBook=()=>{
    let navigate=useNavigate();
    //title,categories,authors,pageCount,shortDescription,longDescription,thumbnailUrl
    let[title,setTitle]=useState("")
    let[author,setAuthor]=useState("")
    let[category,setCategory]=useState("")
    let[page,setPage]=useState("")
    let[short,setShort]=useState("")
    let[long,setLong]=useState("")
    let[url,setUrl]=useState("")

    let handleSubmit=(e)=>{
        e.preventDefault();

        //data to be posted
        let bookData={
            title,author,category,page,short,long,url
        }
        fetch('http://localhost:1000/books',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(bookData)
        })
        navigate('/admin/book-list')
    }
    //posting to server

    return(
        <div className="addBook">
            <h1>Add Book</h1>
            <div className="form">
                <form action="" onSubmit={handleSubmit}>
                <div className="title">
                    <input value={title} onChange={(e)=>setTitle(e.target.value)} className="form-container mb-2 text-center" type="text" required placeholder="Enter title of the Book" />
                </div>
                <div className="authors">
                < input value={author} onChange={(e)=>setAuthor(e.target.value)} className="form-container mb-2 text-center" type="text" required placeholder="Enter Author of the Book" />
                </div>
                <div className="categories">
                < input value={category} onChange={(e)=>setCategory(e.target.value)} className="form-container mb-2 text-center" type="text" required placeholder="Enter Category of the Book" />
                </div>
                <div className="pageCount">
                < input value={page} onChange={(e)=>setPage(e.target.value)} className="form-container mb-2 text-center" type="Number" required placeholder="Enter Number of pages in the Book" />
                </div>
                <div className="shortDescription">
                    <textarea value={short} onChange={(e)=>setShort(e.target.value)} className="form container mb-2" id="" cols="30" rows="10" placeholder="Enter the Short Description"></textarea>
                </div>
                <div className="longDescription">
                <textarea value={long} onChange={(e)=>setLong(e.target.value)} className="form container mb-2" id="" cols="30" rows="10" placeholder="Enter the Long Description"></textarea>
                </div>
                <div className="thumbnailUrl">
                    < input value={url} onChange={(e)=>setUrl(e.target.value)} className="form container mb-2 text-center" type="text" required placeholder="Enter the Url of Image"/>
                </div>
                <button className="addbtn">Add Book</button>
                </form>
            </div>
        </div>
    )
}
export default AddBook;