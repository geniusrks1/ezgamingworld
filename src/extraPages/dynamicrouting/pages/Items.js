import React from 'react';
import { ITEMS } from '../data/ItemData';
import { Link } from 'react-router-dom';
const Items = () => {
  return (
    <>
      <main>
        <h1>Items Pages</h1>
      </main>
      <ul>
        {ITEMS.map((item) => (
          <div>
            <li>{item.id} </li> 
            <li>{item.title} </li> 
            <li>{item.detail}</li>
            {/* <Link to={`/items/${item.id}`}> 
            use this for absolute path*/}
            
           <Link to={`${item.id}`}> 
           <button> show</button>
           </Link> 
            <hr/>
          </div>
          
        ))}
      </ul>
    </>
  );
};

export default Items;
