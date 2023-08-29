import {CartItemType} from "../redux/Cart/types";

export const calcTotalPrice = (items: CartItemType[]) => {
	return items.reduce((acc: number, obj) => acc + obj.count * obj.price, 0);
}