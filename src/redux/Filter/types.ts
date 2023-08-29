export enum SortPropertyEnum {
	RATING_DESC = 'rating',
	PRICE_DESC = 'price',
	TITLE_DESC = 'title',
}

export type SortType = {
	name: string,
	sortProperty: SortPropertyEnum
}

export interface IFilterState {
	searchValue: string,
	categoryId: number,
	currentPage: number,
	sortType: SortType
}