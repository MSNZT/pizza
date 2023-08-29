import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import ContentLoader from "react-content-loader";

export const FullProduct: React.FC = () => {
	const [product, setProduct] = useState<{
		title: string,
		imageUrl: string,
		price: number
	}>();
	const {id} = useParams();
	
	useEffect(() => {
		async function fetchProduct() {
			try {
				const {data} = await axios.get('https://64b2fd8c38e74e386d55ca93.mockapi.io/products/' + id);
				setProduct(data);
			} catch (e) {
				alert('Ошибка при получении продукта')
			}
		}
		
		fetchProduct();
	}, []);
	
	if (!product) {
		return <div style={{textAlign: 'center'}}>
			<ContentLoader
				speed={2}
				width={280}
				height={335}
				viewBox="0 0 280 335"
				backgroundColor="#f3f3f3"
				foregroundColor="#ecebeb"
			>
				<rect x="11" y="208" rx="8" ry="8" width="260" height="27"/>
				<circle cx="135" cy="105" r="90"/>
				<rect x="11" y="247" rx="8" ry="8" width="260" height="27"/>
			</ContentLoader>
		</div>
	}
	
	return (
		<div className="pizza-block">
			<img
				className="pizza-block__image"
				src={product.imageUrl}
				alt={product.title}
			/>
			<h4 className="pizza-block__title">{product.title}</h4>
			<div className="pizza-block__price"
					 style={{marginBottom: '10px'}}>от {product.price} ₽
			</div>
			<Link to='/'>
				<button className="button button--black"><span>Вернуться назад</span></button>
			</Link>
		</div>
	);
};