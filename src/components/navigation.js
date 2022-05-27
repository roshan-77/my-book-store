import React from "react";
import {Link, BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from "react";
import { About } from '../routes/about';
import { Products } from '../routes/products';
import { Home } from '../routes/home';
import '../css/navigation.css'
import '../css/cart.css'

export function Navigation({prop, cartTotalCount, handleClick}){
    let [cartDisplay, updateCartDisplay] = useState(true);
 
    useEffect(()=>{
        console.log("It clicked")
    }, [cartDisplay]);
    return(
        <>
        <Router>
        
            <div className="navigation-bar">
                <ul className="navigation-items">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/products'>Products</Link>
                    </li>
                    <li onClick={prop} style={{cursor:'pointer'}}>Cart<span>{cartTotalCount()}</span></li>
                </ul>
            </div>
        

		<Routes>
			<Route path='/' element={<Home/>}></Route>			
			<Route path='/about' element={<About/>}></Route>
			<Route path='/products' element={<Products handleClick={handleClick}/>}></Route>
		</Routes>
      </Router>

        </>
    )
};