import React from 'react';

import {paginationCount} from "../../utils/paginationCount";
import {useDispatch, useSelector} from "react-redux";

import style from './Pagination.module.scss';
import {filterSelector} from "../../redux/Filter/selectors";
import {onChangePage} from "../../redux/Filter/slice";

export const Pagination: React.FC = () => {
	const pagination = paginationCount();
	const dispatch = useDispatch();
	const {currentPage} = useSelector(filterSelector)
	
	const onClickPrev = () => {
		if (currentPage === 1) return;
		dispatch(onChangePage(currentPage - 1));
	}
	const onClickNext = () => {
		if (currentPage === pagination.length) return;
		dispatch(onChangePage(currentPage + 1));
	}
	
	return (
		<ul className={style.pagination}>
			<li onClick={onClickPrev}>
				<span style={{fontSize: '20px', fontWeight: 'bold'}}>←</span>
			</li>
			{pagination.map((pag, i) =>
				<li
					onClick={() => dispatch(onChangePage(i + 1))}
					key={i}
				>
					<span className={currentPage === i + 1 ? style.active : ''}>{pag + 1}</span>
				</li>
			)}
			<li onClick={onClickNext}>
				<span style={{fontSize: '20px', fontWeight: 'bold'}}>→</span>
			</li>
		</ul>
	);
};