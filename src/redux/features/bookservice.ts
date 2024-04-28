/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoaderState {
	items: string[];
}

export const BookServiceSlice = createSlice({
	name: 'book',
	initialState: {
		items: [],
	} as LoaderState,
	reducers: {
		setItems(state, action: PayloadAction<any>) {
			const isExist = state.items?.find((el) => el === action.payload);
			const items = isExist
				? [...state?.items]
				: [...state?.items, action.payload];
			return {
				...state,
				items: items,
			};
		},
	},
});

export const { setItems } = BookServiceSlice.actions;

export default BookServiceSlice.reducer;
