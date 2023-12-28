import { createSlice } from "@reduxjs/toolkit";
import products from "./initData";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push({
        ...action.payload,
      });
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((p) => p.id !== action.id);
    },
    editProduct: (state, action) => {
      state.products = state.products.map((p) =>
        p.id === action.payload.id ? action.payload : p
      );
    },
  },
});

export const { addProduct, removeProduct, editProduct } = productsSlice.actions;

export default productsSlice.reducer;
