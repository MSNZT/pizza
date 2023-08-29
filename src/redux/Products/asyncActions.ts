import {createAsyncThunk} from "@reduxjs/toolkit";
import {ProductType, SearchPizzaParams} from "./types";
import axios from "axios";

export const fetchProducts = createAsyncThunk<ProductType[], SearchPizzaParams>(
	'products/fetchProducts', async (params) => {
		const {category, sortBy, search, currentPage} = params;
		const {data} = await axios.get<ProductType[]>(`https://64b2fd8c38e74e386d55ca93.mockapi.io/products?page=${currentPage}&limit=4${category}${search}&sortBy=${sortBy}&order=desc`);
		return data;
	}
)