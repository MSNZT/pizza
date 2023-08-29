import React, {useLayoutEffect, useState} from "react"
import ContentLoader from "react-content-loader"

export const Skeleton: React.FC = () => {
	const [width, setWidth] = useState(0);
	
	useLayoutEffect(() => {
		setWidth(window.screen.width)
	}, [])
	
	return (
		<ContentLoader
			speed={2}
			width={280}
			height={487}
			viewBox="0 0 280 520"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
			className="pizza-block"
		>
			{width <= 500
				? <>
					<circle cx="140" cy="95" r="95"/>
					<rect x="0" y="226" rx="10" ry="10" width="280" height="27"/>
					<rect x="0" y="275" rx="10" ry="10" width="280" height="87"/>
					<rect x="100" y="390" rx="10" ry="10" width="89" height="27"/>
					<rect x="70" y="440" rx="10" ry="10" width="150" height="44"/>
				</>
				: <>
					<circle cx="140" cy="120" r="120"/>
					<rect x="0" y="260" rx="10" ry="10" width="280" height="27"/>
					<rect x="0" y="330" rx="10" ry="10" width="280" height="87"/>
					<rect x="0" y="450" rx="10" ry="10" width="89" height="27"/>
					<rect x="130" y="440" rx="10" ry="10" width="150" height="44"/>
				</>
			}
		</ContentLoader>
	)
}