import { createSlice } from "@reduxjs/toolkit";
import { deleteBooking, getBook, getBooking, newBooking, updateBooking } from "./bookAPIs";

const initialState = {
  booking: null,
  loading: false,
  succes: false,
  erorr: false,
  books: null,
  load: false
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers:{
    changeErorr : (state) =>{
      state.erorr = false;
    }
  },
  extraReducers:(builder) => {
    //Make New Booking
    builder.addCase(newBooking.pending, state =>{
        state.loading = true;
        state.succes = false;
        state.erorr = false;
    })
    builder.addCase(newBooking.fulfilled, (state, action) =>{
        state.booking = action.payload;
        state.loading = false;
        state.succes = true;
        state.erorr = false;
    })
    builder.addCase(newBooking.rejected, (state) => {
      state.loading = false;
      state.succes = false;
      state.erorr = true;
    });
    //Get Books
    builder.addCase(getBooking.pending, state =>{
      state.books = null;
      state.load = true;
    })
    builder.addCase(getBooking.fulfilled, (state, action) => {
      state.books = action.payload.bookings;
      state.load = false;
    });
    builder.addCase(getBooking.rejected, (state) => {
      state.books = null;
      state.load = false;
    });
    // Get Book By ID
    builder.addCase(getBook.fulfilled, (state, action) =>{
      state.books = action.payload;
    })
    // Delete Book
    builder.addCase(deleteBooking.fulfilled, (state, action) => {
      state.books = state.books.filter((el) => el._id !== action.payload);
    });
    // Update Book Details
    builder.addCase(updateBooking.pending, (state) => {
      state.books = null;
      state.loading = true;
    });
    builder.addCase(updateBooking.fulfilled, (state, action) => {
      state.books = action.payload;
      state.loading = false;
    });
    builder.addCase(updateBooking.rejected, (state) => {
      state.loading = false;
    });
  }
});

export const {changeErorr} = bookingSlice.actions;
export default bookingSlice.reducer;