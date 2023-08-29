import React, {useEffect, useRef} from 'react';
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {productSelector} from "../../redux/Products/selectors";
import {filterSelector} from "../../redux/Filter/selectors";
import {useAppDispatch} from "../../redux/store";
import {fetchProducts} from "../../redux/Products/asyncActions";

import {Categories, Pagination, ProductBlock, Skeleton, Sort} from "../../components";

export const Home: React.FC = () => {
	const dispatch = useAppDispatch();
	const {
		categoryId,
		currentPage,
		sortType,
		searchValue
	} = useSelector(filterSelector)
	const {products, status} = useSelector(productSelector);
	const [_, setSearchParams] = useSearchParams();
	const isSearch = useRef(false);
	const isMounted = useRef(false);
	
	function getProducts() {
		const category = categoryId > 0 ? `&category=${categoryId}` : '';
		const search = searchValue ? `&search=${searchValue}` : '';
		
		dispatch(
			fetchProducts({
				category,
				sortBy: sortType.sortProperty,
				search,
				currentPage,
			})
		)
		window.scroll(0, 0);
	}
	
	// useEffect(() => {
	// 	if (window.location.search) {
	// 		const params = qs.parse(window.location.search.substring(1));
	// 		const sortType = sortList.find(obj => obj.sortProperty === params.sortProperty);
	// 		dispatch(
	// 			setFilters({
	// 				...params, sortType
	// 			})
	// 		)
	// 		isSearch.current = true;
	// 	}
	// }, []);
	
	useEffect(() => {
		// if (isMounted.current) {
		// 	const queryString = qs.stringify({
		// 		sortProperty: sortType.sortProperty,
		// 		categoryId,
		// 		currentPage,
		// 	})
		// 	setSearchParams(`?${queryString}`);
		// }
		// isMounted.current = true;
		
		getProducts()
	}, [categoryId, sortType, currentPage, searchValue]);
	
	// useEffect(() => {
	// 	if (!isSearch.current) {
	// 		getProducts()
	// 	}
	// 	isSearch.current = false;
	// }, [categoryId, sortType, searchValue, currentPage])
	
	const skeleton = [...new Array(8)].map((_, i) => <Skeleton key={i}/>);
	const pizzas = products.map((product: any) => <ProductBlock
		key={product.id} {...product} />)
	
	return (
		<div className="container">
			<div className="content__top">
				<Categories/>
				<Sort/>
			</div>
			<h2 className="content__title">Все пиццы</h2>
			{status === 'error'
				? <div className="content__error">
					<h2>Произошла ошибка <span>😕</span></h2>
					<p>
						К сожалению произошла ошибка при получении товаров. Попробуйте обновить
						страницу.
					</p>
				</div>
				: <>
					<div className="content__items">
						{status === 'loading'
							? skeleton
							: pizzas}
					</div>
					<Pagination/>
				</>
			}
		</div>
	);
};