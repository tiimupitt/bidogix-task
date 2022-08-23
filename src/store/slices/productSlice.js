import { createSlice } from '@reduxjs/toolkit';

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
	basket: null
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
		}
	}
});

export const { addProductsPage, clearProducts } = productSlice.actions;
export default productSlice.reducer;