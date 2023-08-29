import React from 'react';

import style from './NotFound.module.scss'
import {Link} from "react-router-dom";

export const NotFound: React.FC = () => {
	return (
		<div className='container'>
			<div className={style.notFound}>
				<h2>К сожалению страница не найдена <span>😕</span></h2>
				<Link to="/" className="button button--black">
					<span>Вернуться назад</span>
				</Link>
			</div>
		</div>
	);
};