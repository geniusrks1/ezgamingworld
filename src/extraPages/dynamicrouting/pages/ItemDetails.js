import React from 'react'
import { ITEMS } from '../data/ItemData'
import { useParams,Link } from 'react-router-dom'

const ItemDetails = () => {
  const{id}=useParams();
 
  const item=ITEMS.find((item)=>item.id===id);
  if (!item) {
    return (
      <div>
        <p>Item not found</p>
        <Link to="../items">Go back to items</Link>
      </div>
    );
  }
   
  
  return (
    <>
    <main>
      <h1>ItemDetails</h1>
      </main>
   
      <h2>{item.title}</h2>
      <p>{item.datil}</p>
    </>
  )
}

export default ItemDetails