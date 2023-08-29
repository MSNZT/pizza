import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CartItemType, ICartState} from "./types";
import {getCartFromLS} from "../../utils/getCartFromLS";

const initialState: ICartState = getCartFromLS();

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action: PayloadAction<CartItemType>) {
			const item = state.items.find((obj) => obj.id === action.payload.id)
			if (item) {
				item.count++
			} else {
				state.items.push({...action.payload, count: 1});
			}
			state.totalPrice = state.items.reduce((acc: number, obj) => acc + obj.count * obj.price, 0);
		},
		minusItem(state, action: PayloadAction<string>) {
			const findItem = state.items.find((obj) => obj.id === action.payload);
			if (findItem) {
				findItem.count--
				state.totalPrice -= findItem.price;
			}
		},
		removeItem(state, action: PayloadAction<string>) {
			const item = state.items.find((obj) => obj.id === action.payload);
			if (item) {
				state.items = state.items.filter((obj) => obj.id !== action.payload);
				state.totalPrice -= item.price * item.count;
			}
		},
		setClear(state) {
			state.items = [];
			state.totalPrice = 0;
		}
	}
})

export const {addItem, removeItem, minusItem, setClear} = cartSlice.actions;
export default cartSlice.reducer;