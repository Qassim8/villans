import { configureStore } from "@reduxjs/toolkit";
import auth from './slices/auth/authSlice';
import hotel from "./slices/hotel/hotelSlice";
import room from "./slices/room/roomSlice";
import booking from "./slices/booking/bookSlice";
import fav from "./slices/fav/favSlice";
import pay from "./slices/payment/paySlice";

const store = configureStore({reducer:{auth, hotel, room, booking, fav, pay}});

export default store;