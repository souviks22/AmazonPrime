import { configureStore } from "@reduxjs/toolkit";
import navReducer from './navSlice'
import catgReducer from './catgSlice'
import boxReducer from './boxSlice'

const store = configureStore({
    reducer: {
        nav: navReducer,
        catg: catgReducer,
        box: boxReducer
    }
})

export default store