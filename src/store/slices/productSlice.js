import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
	products: {
		config: null,
		data: [],
		info: null,
		pagination: {
			current_page: 0,
			limit: 10,
			total_pages: undefined
		}
	},
	basket: {}
}

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		addProductsPage: (state, action) => {
			const { config, data, info, pagination } = action.payload;
			state.products = {
				config: config,
				data: [...state.products.data, ...data],
				info: info,
				pagination: pagination
			}
		},
		clearProducts: state => {
			state.products = initialState.products;
		},
		addToBasket: (state, action) => {
			const product = action.payload;
			const currentBasket = current(state.basket);

			const updatedBasketProduct = {
				product: product,
				count: (currentBasket[product.id]?.count ?? 0) + 1
			}

			state.basket[product.id] = updatedBasketProduct;
		},
		removeFromBasket: (state, action) => {
			const product = action.payload;

			let currentBasket = current(state.basket);

			const updatedBasketProduct = {
				product: product,
				count: (currentBasket[product.id]?.count ?? 0) - 1
			}

			if (updatedBasketProduct.count < 1) {
				const newBasket = state.basket;
				delete newBasket[product.id];
			} else {
				state.basket[product.id] = updatedBasketProduct;
			}
		}
	}
});

export const { addProductsPage, clearProducts, addToBasket, removeFromBasket } = productSlice.actions;
export default productSlice.reducer;