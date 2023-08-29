export const paginationCount = () => {
	const array = [];
	const productsCount = 12;
	const count: number = Math.ceil(productsCount / 4)
	for (let i: number = 0; i < count; i++) {
		array.push(i);
	}
	return array;
}