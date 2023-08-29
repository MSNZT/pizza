import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {onClickCategory} from "../redux/Filter/slice";
import {filterSelector} from "../redux/Filter/selectors";

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
export const Categories: React.FC = () => {
	const dispatch = useDispatch();
	const {categoryId} = useSelector(filterSelector);
	return (
		<div className="categories">
			<ul>
				{categories.map((category, i) =>
					<li
						key={i}
						className={i === categoryId ? 'active' : ''}
						onClick={() => dispatch(onClickCategory(i))}
					>
						{category}
					</li>)}
			</ul>
		</div>
	);
};