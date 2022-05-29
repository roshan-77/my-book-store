import React, { useState } from "react"
import book1 from '../backgroundimages/books-1.jpg';
import {Card, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {books} from '../components/books.js';
import '../css/home.css'
const {v4: uuidv4} = require('uuid')
// import {BrowserRouter as Router, Routes, Switch, Route, Link} from 'react-router-dom';

export function Home(){

    const [active, setActive] = useState("FirstCard");

    // Check category type to render the books accordingly
    function Categorydiv({categoryType}){
        return (<div className="category-div" style={{width:"700px", margin:"0 auto"}}>
            {categoryType !== ""?
            books.map((item)=> {return(item.category===categoryType && <div className="p-2" key={uuidv4()}><img src={item.img}  alt="" style={{width:"auto", height:"300px"}}></img></div>)}):
            books.map((item)=> {return(<div className="p-2" key={uuidv4()}><img src={item.img}  alt="" style={{width:"auto", height:"300px"}}></img></div>)})
            }
        </div>)
    }

    function Topsellers(){
        return (<div className="category-div" style={{width:"700px", margin:"0 auto"}}>
            {
                books.map((item)=>item.sold>100 && <div className="p-2" key={uuidv4()}><img src={item.img}  alt="" style={{width:"auto", height:"300px"}}></img>
                <div>Sold more than {item.sold} copies</div>
                </div>)
            }

        </div>
        )
    }

    return (
        <>
            <section className="content-wrapper" style={{position:"absolute", width:"100%"}}>
                <section className="wrapper">
                    <div className="background-img">
                        <div style={{backgroundImage:`url(${book1})`, height: "50vh", backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"center"}}></div>
                    </div>
                </section>
                <section className="about-us">
                    <div className="about-us-description d-flex justify-content-center"
                        style={{padding: "30px 0"}}> 

                        <Card className="col-md-6 w-25" >
                              <Card.Header>About Us</Card.Header>
                              <Card.Body>
                                <Card.Title>E-Book Store</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio earum amet nam sapiente temporibus laborum aperiam explicabo labore, natus ducimus enim nemo distinctio vero eaque itaque atque voluptatem at quos.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                              </Card.Body>
                        </Card>
                    </div>
                </section>
                <section className="category">
                    <h1>Categories</h1>                    
                    {/* Work on this div to add cards to render the categories we offer */}
                    
                    <ul style={{listStyleType:"none", cursor:"pointer"}} className="d-flex justify-content-center text-white">
                        <button onClick={()=>setActive("FirstCard")} className="m-2 p-2 text-white" style={{backgroundColor:"blue", borderRadius:"20px"}}>All</button>                    
                        <button onClick={()=>setActive("SecondCard")} className="m-2 p-2 text-white" style={{backgroundColor:"blue", borderRadius:"20px"}}>Sci-Fi</button>
                        <button onClick={()=>setActive("ThirdCard")} className="m-2 p-2 text-white" style={{backgroundColor:"blue", borderRadius:"20px"}}>Comic</button>
                        <button onClick={()=>setActive("FourthCard")} className="m-2 p-2 text-white" style={{backgroundColor:"blue", borderRadius:"20px"}}>Education</button>
                        <button onClick={()=>setActive("FifthCard")} className="m-2 p-2 text-white" style={{backgroundColor:"blue", borderRadius:"20px"}}>Travel</button>
                        <button onClick={()=>setActive("SixthCard")} className="m-2 p-2 text-white" style={{backgroundColor:"blue", borderRadius:"20px"}}>Food</button>
                        
                    </ul>

                    {/* Checking that the active is the one in setActive and render the div accordingly*/}
                    {active === "FirstCard" && 
                        <Categorydiv categoryType= "" />
                    }
                    
                    {active === "SecondCard" && 
                        <Categorydiv categoryType= {"scifi"} />
                    }

                    {active === "ThirdCard" && 
                        <Categorydiv categoryType= {"comic"} />
                    }

                    {active === "FourthCard" && 
                        <Categorydiv categoryType= {"education"} />
                    }
                    
                    {active === "FifthCard" && 
                        <Categorydiv categoryType= {"travel"} />
                    }


                    {active === "SixthCard" && 
                        <Categorydiv categoryType= {"food"} />
                    }

                    
                </section>

                <section className="top-sellers">
                    <h1>Our Top Sellers</h1>
                    <Topsellers/>                    
                </section>
                
                <section className="contact-us">
                    
                </section>
                <section className="footer">
                    <div className="copy-right" style={{textAlign:"center"}}>
                    &copy; Whitz Book Store 2022
                    </div>
                </section>
            </section>
        </>
    )
};