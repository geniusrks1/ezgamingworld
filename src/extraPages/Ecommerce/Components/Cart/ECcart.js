import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Style from './Cart.module.css';
import Productitem from '../Products/Productitem';
import { useSelector , useDispatch } from 'react-redux';
import { cartSelector , cartActions , clearCartAsync } from '../../../../redux/reducer/CartReducer';
import { onPurchaseAsync } from '../../../../redux/reducer/OrdersReducer';

function ECcart() {
  const { cart , total } = useSelector(cartSelector);
  const dispatch = useDispatch();
  const [purchasing, setPurchasing] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(cartActions.calcTotalPrice());
  }, [dispatch,cart])

  const handlePurchase = async()=>{
    setPurchasing(true);
    dispatch(onPurchaseAsync())
    .then(()=>{
      dispatch(clearCartAsync())
      .then(()=>setPurchasing(false))
    })
    .then(()=> navigate('/ecommerce/orders'));
  }
  
  return (
    <>
    <div className={Style.container}>
      {cart?.length < 1 && <h2>Cart is Empty.</h2>}
      {cart?.map((product)=>{
        return <Productitem key={product.id} product={product}/>
      })}

    </div>
      <div className="navbar sticky-bottom bg-body-tertiary" style={{bottom: '0px' , borderTop: '1px solid black' , borderBottom: '1px solid black'}}>
        <div className="container-fluid">
          <p className={Style.price}>${total}</p>
          <button className='btn btn-success btn-sm' disabled={(cart.length === 0 ? true : '') || (purchasing ? true : '')}
          onClick={handlePurchase}
          >{purchasing ? "Purchasing..." : "Purchase"}</button>
        </div>
      </div>
    </>
  )
}

export default ECcart;