import { createSlice } from "@reduxjs/toolkit";
import { addItem, deleteItems, getItems } from "./favAPIs";



const initialState = {
  load: false,
  item: localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites"))
    : null,
};
  
const favSlice = createSlice({
  name: "fav",
  initialState,
  extraReducers: (builder) => {
    //add items to favorite
    builder.addCase(addItem.fulfilled, (state, action) => {
      state.item = action.payload.hotels;
      localStorage.setItem('favorites', JSON.stringify(state.item))
    });
    //Get items
    builder.addCase(getItems.pending, (state) => {
      state.load = true;
    });
    builder.addCase(getItems.fulfilled, (state, action) => {
      state.load = false;
      state.item = action.payload[0]?.hotels;
    });
    builder.addCase(getItems.rejected, (state) => {
      state.load = false;
    });
    // Delete Item
    builder.addCase(deleteItems.fulfilled, (state, action) => {
      state.item = state.item.filter((el) => el._id !== action.payload);
    });
  },
});


export default favSlice.reducer;
