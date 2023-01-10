import '../styles/readBook.css'
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
const ReadBook = () => {
    let[books,setBooks]=useState([])
    let params = useParams()
    useEffect(()=>{
        let fetchData=async()=>{
            let response= await fetch(`http://localhost:1000/books/${params.id}`)
            let data= await response.json();
            setBooks(data);
        }
        fetchData()
    },[books])
    return ( 
        <div className="readBook">
            <h1>Read Book</h1>
            <h2>{books.title}</h2>
            <h6>{books.longDescription}</h6>
        </div>
    );
}
export default ReadBook;