import * as ProductUtility from 'utilities/product';
import { useSelector, useDispatch } from 'react-redux';
import { clearProducts } from 'store/slices/productSlice';
import { useState, useEffect } from 'react';

import ProductCard from 'components/ProductCard';

export default function BrowseProducts() {
	const dispatch = useDispatch();

	const { products } = useSelector(state => state.product);

	console.log(products);

	useEffect(() => {
		dispatch(clearProducts());
		ProductUtility.getProductPage();
	}, []);

	return (
		<main className='min-h-screen pt-32 bg-white'>
			<div className='grid grid-cols-3 max-w-6xl mx-auto'>
				{/* <h2>Popular listings</h2> */}
				{products.data.map((product, index) => <ProductCard key={String(product.id) + String(index)} product={product} />)}

			</div>
		</main>
	)
}