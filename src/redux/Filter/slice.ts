import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFilterState, SortPropertyEnum, SortType} from "./types";

const initialState: IFilterState = {
	searchValue: '',
	categoryId: 0,
	currentPage: 1,
	sortType: {
		name: 'популярности', sortProperty: SortPropertyEnum.RATING_DESC
	},
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setSearchValue(state, action: PayloadAction<string>) {
			state.searchValue = action.payload;
		},
		onClickCategory(state, action: PayloadAction<number>) {
			state.categoryId = action.payload
		},
		onChangeSort(state, action: PayloadAction<SortType>) {
			state.sortType = action.payload
		},
		onChangePage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload;
		},
		setFilters(state, action: PayloadAction<IFilterState>) {
			state.sortType = action.payload.sortType
			state.currentPage = Number(action.payload.currentPage);
			state.categoryId = Number(action.payload.categoryId);
		},
		onResetFilters(state) {
			state.sortType = {name: 'популярности', sortProperty: SortPropertyEnum.RATING_DESC};
			state.currentPage = 1;
			state.categoryId = 0;
			state.searchValue = '';
		}
	}
})

export const {
	setSearchValue,
	onClickCategory,
	onChangeSort,
	onChangePage,
	setFilters,
	onResetFilters
} = filterSlice.actions;

export default filterSlice.reducer