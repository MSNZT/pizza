import React from 'react';
import {Link} from "react-router-dom";
import style from "./PaymentBlock.module.scss"

export const PaymentBlock = () => {
	return (
		<div className='container'>
			<div className={style.PaymentBlock}>
				<h2>Поздравляю! Заказ успешно оформлен. <span>😉</span></h2>
				<Link to="/" className="button button--black">
					<span>Вернуться назад</span>
				</Link>
			</div>
		</div>
	);
};