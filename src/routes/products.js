import React from "react"
import { books } from "../components/books"
import '../css/products.css';
const {v4:uuidv4} = require('uuid');

export function Products({handleClick}){
    
    //book api - https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=AIzaSyAp4TFpUxQK3mvx_bceBKOOFRo_CObfiRY
    return (
        <>
            <div className="books">
            {books.map((books)=> {
                return (<div key= {uuidv4()} >
                <img src={books.img} alt="" className="image" />
                <h1>{books.title}</h1>
                <h2>Price: ${books.price}</h2>
                <p>In Stock: {books.available}</p>
                <button onClick={()=>handleClick(books)}>Add to Cart</button>
            </div>)
            })    
            }
        </div>
        </>
    )
};