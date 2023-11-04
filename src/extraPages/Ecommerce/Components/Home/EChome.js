import React, { useEffect, useState } from 'react';
import Style from './EChome.module.css';
import Productitem from '../Products/Productitem';
import { FiFilter } from "react-icons/fi";
import Filter from '../Filter/Filter';
import { useDispatch , useSelector } from 'react-redux';
import { getProducts, productsSelector , productsActions } from '../../../../redux/reducer/ProductsReducer'
import { userSelector } from '../../../../redux/reducer/UserReducer';
import { getCartProducts } from '../../../../redux/reducer/CartReducer';
import { getOrders } from '../../../../redux/reducer/OrdersReducer';
import { getUniqueData } from '../../Utils/util_functions';
import { filterSelector } from '../../../../redux/reducer/FilterReducers';

function EChome() {
    const { products } = useSelector(productsSelector);
    const { user } = useSelector(userSelector);
    const { price , filterCategory , searchQuery } = useSelector(filterSelector);
    const [showFilter, setShowFilter] = useState(false);
    const dispatch = useDispatch();

    //call the fetch products function
    useEffect(() => {
        dispatch(getProducts());
        dispatch(productsActions.getCategory(getUniqueData(products , 'category')));
        if(user){
            dispatch(getCartProducts());
            dispatch(getOrders());
        }
    }, [dispatch,products,user]);

    const transformedProducts = ()=>{
        let filteredProducts = [...products];
        if(price){
            filteredProducts = filteredProducts.filter((el)=> Number(el.price) <= price);
        }
        if(filterCategory.length > 0){
            let temp = filterCategory.map((cat)=>{
                let tempProds = filteredProducts.filter((el)=> el.category === cat);
                return tempProds;
            })
            filteredProducts = temp.flat();
        }
        if(searchQuery){
            filteredProducts = filteredProducts.filter((el)=> el.title.toLowerCase().includes(searchQuery.toLowerCase()))
        }
        return filteredProducts;
    };


  return (
    <div className={Style.container}>
        <button type="button" className={Style.btn + " btn btn-primary"}
                style={
                    {'--bs-btn-padding-y': '.25rem' , '--bs-btn-padding-x': '.5rem' ,  '--bs-btn-font-size': '.75rem'
                    ,marginTop:"-10px"
                }}
                onClick={()=> setShowFilter(!showFilter)}>
            <FiFilter className='mx-1' />
            Filter
        </button>
        {showFilter && <Filter/>}
        
        {transformedProducts().map((product)=>{
            return <Productitem key={product.id} product={product}/>
        })}
    </div>

  )
}

export default EChome