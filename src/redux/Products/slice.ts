import {createSlice} from "@reduxjs/toolkit";
import {IProductsState, StatusEnum} from "./types";
import {fetchProducts} from "./asyncActions";

const initialState: IProductsState = {
	products: [],
	status: StatusEnum.LOADING
};

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.status = StatusEnum.LOADING;
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.status = StatusEnum.SUCCESS;
				state.products = action.payload;
			})
			.addCase(fetchProducts.rejected, (state) => {
				state.status = StatusEnum.ERROR;
				state.products = [];
			})
	}
})

export const {} = productsSlice.actions;
export default productsSlice.reducer;