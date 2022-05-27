import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { Navigation } from './components/navigation';
import { About } from './routes/about';
import { Products } from './routes/products';
import { Home } from './routes/home';
import Cart from './components/cart';

function App() {
	const [cartItems, updateCartItems] = useState([]);
  
	const cartTotalPrice = ()=>{
	  var priceArr=[]
	  cartItems.map((data)=>
		  priceArr.push(data.count*data.price)
	  )
	  var totalPrice = priceArr.reduce((prev,curr)=>prev+curr,0)
	  console.log(totalPrice)
	  return totalPrice;
  }
  
	const cartTotalCount = () => {
	  var countArr=[]
	  cartItems.map((data)=>
		  countArr.push(data.count)
	  )
	  var cartTotalCount = countArr.reduce((prev,curr)=>prev+curr,0)
	  console.log(cartTotalCount)
	  return cartTotalCount;
	}
  
	const handleClick = (books)=>{
			if (cartItems.includes(books)){
			  alert("Item already in cart!!")
			}else{
			updateCartItems([...cartItems, books])
			}
		   cartTotalPrice();
	}
  
	useEffect(()=>
		console.log(cartItems)
		,[cartItems] 
	)
  
	let [cartDisplay, updateCartDisplay] = useState(false);
   
	useEffect(()=>{
		console.log("It clicked")
	}, [cartDisplay]);
	
	
	const handleCart= () => updateCartDisplay(cartDisplay===false?true:false)
  
	return (
	  <>
	  <Navigation prop={handleCart} cartTotalCount = {cartTotalCount} handleClick={handleClick}/>
	  <Cart cartItems={cartItems} updateCartItems = {updateCartItems} prop= {cartDisplay} cartTotalCount = {cartTotalCount} cartTotalPrice={cartTotalPrice}/>
	  {/* <Products handleClick={handleClick}/> */}
	  </>
	);
  }

export default App;
