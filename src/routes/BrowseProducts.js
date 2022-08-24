import * as ProductUtility from 'utilities/product';
import { useSelector, useDispatch } from 'react-redux';
import { clearProducts, addToBasket } from 'store/slices/productSlice';
import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import ProductCard from 'components/ProductCard';

export default function BrowseProducts() {

	const dispatch = useDispatch();
	const { products } = useSelector(state => state.product);

	useEffect(() => {
		dispatch(clearProducts());
		ProductUtility.getProductPage();
	}, []);

	return (
		<main className='min-h-screen pt-40 bg-white'>

			{/* products list */}
			<h2 className='text-center text-2xl font-semibold mb-16 text-gray-900'>Popular products</h2>
			<InfiniteScroll
				dataLength={products.data.length}
				next={() => ProductUtility.getProductPage()}
				hasMore={products.pagination.current_page < products.pagination.total_pages}

			>
				<div className='grid md:grid-cols-3 max-w-6xl mx-auto'>
					{products.data.map((product, index) =>
						<ProductCard
							key={String(product.id) + String(index)}
							product={product}
							onClick={() => dispatch(addToBasket(product))}
						/>
					)}
				</div>
			</InfiniteScroll>
		</main>
	)
}