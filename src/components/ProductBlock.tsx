import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {Sizes, Types} from "../redux/Products/types";
import {addItem} from "../redux/Cart/slice";
import {calcProductPrice} from "../utils/calcProductPrice";

export const typesName: string[] = ['тонкое', 'традиционное'];

interface ProductBlockProps {
	title: string,
	imageUrl: string,
	price: number,
	types: Types[],
	sizes: Sizes[],
	id: string
}

export const ProductBlock: React.FC<ProductBlockProps> = ({
																														title,
																														imageUrl,
																														price,
																														types,
																														sizes,
																														id
																													}) => {
	const dispatch = useDispatch();
	// const generateId = nanoid(8);
	const [typeIndex, setTypeIndex] = useState(0);
	const [sizeIndex, setSizeIndex] = useState(0);
	const [priceItem, setPriceItem] = useState(0);
	const generateId = id + types[typeIndex].price + sizes[sizeIndex].price;
	
	useEffect(() => {
		setPriceItem(calcProductPrice(types[typeIndex], sizes[sizeIndex], price));
	}, [typeIndex, sizeIndex])
	const onClickAdd = () => {
		const item = {
			id: generateId,
			title,
			imageUrl,
			price: priceItem,
			type: typesName[typeIndex],
			size: sizes[sizeIndex].sizeItem,
			count: 0
		}
		dispatch(addItem(item))
	}
	
	return (
		<div className="pizza-block">
			<Link to={`product/${id}`}>
				<img
					className="pizza-block__image"
					src={imageUrl}
					alt={title}
				/>
				<h4 className="pizza-block__title">{title}</h4>
			</Link>
			<div className="pizza-block__selector">
				<ul>
					{types.map((obj, i: number) => <li
						key={i}
						className={typeIndex === i ? 'active' : 'null'}
						onClick={() => setTypeIndex(i)}
					>
						{typesName[obj.typeItem]}
					</li>)}
				</ul>
				<ul>
					{sizes.map((obj, i: number) => <li
						key={i}
						className={sizeIndex === i ? 'active' : ''}
						onClick={() => setSizeIndex(i)}
					>
						{obj.sizeItem} см.
					</li>)}
				</ul>
			</div>
			<div className="pizza-block__bottom">
				<div className="pizza-block__price">от {priceItem} ₽</div>
				<button className="button button--outline button--add"
								onClick={onClickAdd}
				>
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
							fill="white"
						/>
					</svg>
					<span>Добавить</span>
					{/*<i></i>*/}
				</button>
			</div>
		</div>
	);
};
