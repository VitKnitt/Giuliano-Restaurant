import { configureStore } from "@reduxjs/toolkit"
import  urlReducer  from './urlSlice'
import usersReducer from '../user/usersSlice'

export const store = configureStore({
    reducer:{
        url: urlReducer,
        users: usersReducer,
    }
})