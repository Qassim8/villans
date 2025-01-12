import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getBook, getBooking } from "../store/slices/booking/bookAPIs";
import { useParams } from "react-router-dom";

const useBookingInfo = () =>{

    const fallDate = new Date();

    const {booking, succes, loading, erorr, books, load} = useSelector(state => state.booking);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBooking());
    },[dispatch]);

    useEffect(() => {
        dispatch(getBook(id))
    },[dispatch, id])

    return{fallDate, booking, succes, loading, erorr, books, load}
    
}

export default useBookingInfo;