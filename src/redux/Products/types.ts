export type SearchPizzaParams = {
	category: string;
	sortBy: string;
	search: string;
	currentPage: number;
};

export type Types = {
	typeItem: number,
	price: number
}

export type Sizes = {
	sizeItem: number,
	price: number
}

export type ProductType = {
	category: number,
	id: string,
	imageUrl: string,
	price: number,
	rating: number,
	sizes: Types[],
	types: Sizes[],
	title: string
}

export enum StatusEnum {
	LOADING = 'loading',
	ERROR = 'error',
	SUCCESS = 'success'
}

export interface IProductsState {
	products: ProductType[]
	status: StatusEnum
}