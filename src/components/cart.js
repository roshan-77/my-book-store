import React, { useState } from 'react';
// import './cart.css';
const { v4: uuidv4 } = require ('uuid');

function Cart({cartItems, updateCartItems, prop, cartTotalCount, cartTotalPrice}){
    // const [totalPrice, updateTotalPrice] = useState(0);

    // const handlePrice =()=>{
    //     let total=0;
    //     const totals = cartItems.map((data)=>data.price+total)
    //     updateTotalPrice(totals)
    // }
    
    // function cartTotal(){
    //     var priceArr=[]
    //     cartItems.map((data)=>{
    //         priceArr.push(data.price)
    //     })
    //     var totalPrice = priceArr.reduce((prev,curr)=>prev+curr,0)
    //     return totalPrice;
    // }

    const clearAll = () =>{
        updateCartItems([]);
    }

    const addition = (id) =>{
        updateCartItems(
            cartItems => cartItems.map(
                (items)=>items.id === id && items.count>=0 && items.count<items.available?{...items, count:items.count+1}:items)
        )    
    }

    const subtraction = (id) =>{
        updateCartItems(
            cartItems => cartItems.map(
                (items)=>items.id === id && items.count>1?{...items, count:items.count-1}:items)
        )    
    }

    const handleRemove = (id) => {
        const arr = cartItems.filter((item)=>item.id !== id)
        updateCartItems(arr);
    }

    let cartDisplay = prop? "cart": "hide-cart"
    return(
        <>
            <div className={cartDisplay}>
                <div className="cart-header">
                    <ul>
                        <li style={{"cursor":"pointer"}} onClick={()=>clearAll()}>Clear</li>
                        <li>ID</li>
                        <li>Items</li>
                        <li>Quantity</li>
                        <li>Price</li>
                    </ul>
                </div>
                <div className="cart-body">
                    {cartItems.map((items)=>{
                    return(
                    <div className="items" key={uuidv4()}>
                        <ul>
                            <li onClick={()=>handleRemove(items.id)} style={{"cursor":"pointer"}}>x</li>
                            <li id="1" className="item">{cartItems.indexOf(items)+1}</li>
                            <li id="2" className="item">{items.title}</li>
                            <li id="3" className="item"><button onClick={()=>subtraction(items.id)}>-</button >{items.count}<button onClick={()=>addition(items.id)}>+</button></li>
                            <li id="4" className="item">${items.count*items.price}</li>
                        </ul>
                        
                    </div>)}
                    )}
                    
                  
                </div>
                
                <div className="cart-footer">
                    <ul>
                        <li></li>
                        <li></li>
                        <li>Total</li>
                        <li>{cartTotalCount()}</li>
                        <li>${cartTotalPrice()}</li>
                    </ul>
                </div>
            </div>
        </>
    );
}


export default Cart;