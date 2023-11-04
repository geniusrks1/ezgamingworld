import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { todoReducer } from "./reducer/todoReducer";
import {noteReducer} from './reducer/noteReducer'
import { notificationReducer } from "./reducer/notificationReducer";
import { loggerMiddleware } from "./middlewares/loggermiddleware";
import { userReducer } from "./reducer/UserReducer";
import {productsReducer} from './reducer/ProductsReducer'
import {cartReducer} from './reducer/CartReducer'
import {ordersReducer} from './reducer/OrdersReducer'
import {filterReducer} from './reducer/FilterReducers'

export const store=configureStore({
    reducer:{
        todoReducer,
        noteReducer,
        notificationReducer,
        userReducer,
        productsReducer,
        cartReducer,
        ordersReducer,
        filterReducer
    },
    middleware:[...getDefaultMiddleware(),loggerMiddleware]
});

