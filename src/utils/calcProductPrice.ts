import {Sizes, Types} from "../redux/Products/types";

export const calcProductPrice = (types: Types, sizes: Sizes, price: number) => {
	return types.price + sizes.price + price
}