export type CartItemType = {
	id: string,
	title: string,
	imageUrl: string,
	price: number
	type: string
	size: number
	count: number
}

export interface ICartState {
	totalPrice: number
	items: CartItemType[],
}