import React, { useEffect, useState } from "react";
import { BooksCards } from "../components/books-card";

export function About({handleClick}){
    // function pullBooks(){
    //     return book;
    // }
    let url = `https://www.googleapis.com/books/v1/volumes?q=harrypotter&filter=ebooks&key=AIzaSyAp4TFpUxQK3mvx_bceBKOOFRo_CObfiRY&maxResults=40`
    const [books, updateBooks] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // const book=[{volumeInfo:{title:"take me home"}}];

    useEffect(()=>{
        setLoading(true)
        fetch(url)
        .then((res)=>res.json())
        .then((books)=>updateBooks(books.items))
        .catch((err)=>{
            setError(err)
        }).finally(
            setLoading(false)
        )}, [url])

    // console.log(books)

    return (
        < div style={{position:"absolute"}}>
            <>We provide e-books to everyone in need.</>
            
            {loading===true && <div>Loading....</div>}
            {error === true && <div>Error</div>}
            {/* {books !==null && <div>
                {books.map((book)=>{return(<div>{book.volumeInfo.title}</div>)})}
            </div>} */}
            <input type="text" ></input>
            <button>Search</button>
           <BooksCards books={books} handleClick={handleClick}/>
        </div >
    )
};