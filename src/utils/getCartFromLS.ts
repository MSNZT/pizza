import {calcTotalPrice} from "./calcTotalPrice";
import {CartItemType} from "../redux/Cart/types";

export const getCartFromLS = () => {
	const data = localStorage.getItem('cart');
	const items: CartItemType[] = data ? JSON.parse(data) : [];
	const totalPrice: number = calcTotalPrice(items)
	return {
		items, totalPrice
	}
}