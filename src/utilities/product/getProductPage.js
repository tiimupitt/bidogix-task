import store from 'store';
import { addProductsPage } from 'store/slices/productSlice';

export default async function getProductPage() {
	try {

		const { current_page, limit, total_pages } = store.getState().product.products.pagination;

		if (total_pages !== undefined && current_page >= total_pages) return;

		const response = await fetch(`https://api.artic.edu/api/v1/products?page=${current_page + 1}&limit=${limit}`);

		if (!response.ok) return;

		const products = await response.json();

		return store.dispatch(addProductsPage(products));

	} catch (error) {
		return
	}
}