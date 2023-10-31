import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { todoReducer } from "./reducer/todoReducer";
import {noteReducer} from './reducer/noteReducer'
import { notificationReducer } from "./reducer/notificationReducer";
import { loggerMiddleware } from "./middlewares/loggermiddleware";
export const store=configureStore({
    reducer:{
        todoReducer,
        noteReducer,
        notificationReducer
    },
    middleware:[...getDefaultMiddleware(),loggerMiddleware]
});

