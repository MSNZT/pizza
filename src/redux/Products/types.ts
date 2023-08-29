export type SearchPizzaParams = {
	category: string;
	sortBy: string;
	search: string;
	currentPage: number;
};

export type ProductType = {
	category: number,
	id: string,
	imageUrl: string,
	price: number,
	rating: number,
	sizes: [],
	types: [],
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