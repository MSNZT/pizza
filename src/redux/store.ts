import {configureStore} from "@reduxjs/toolkit";
import filter from "./Filter/slice";
import products from "./Products/slice";
import cart from "./Cart/slice";
import {useDispatch} from "react-redux";


export const store = configureStore({
	reducer: {
		filter,
		products,
		cart,
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch