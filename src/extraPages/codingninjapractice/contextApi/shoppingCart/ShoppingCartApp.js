import React from 'react'
import Navbar from './components/Navbar'
import CustomItemContext from './itemContext';
import Items from './components/Items';

const ShoppingCartApp = () => {
  
  return (
    // <itemContext.Provider value={{total,setTotal,item,setItem}}>
    <CustomItemContext>
    <div style={{padding:"1rem", color:"white",textAlign:"center",fontWeight:"bold"}}>
      <h2>Shopping Cart</h2>
        <Navbar/>
        <Items/>
        
  </div>
  </CustomItemContext>
  )
}

export default ShoppingCartApp