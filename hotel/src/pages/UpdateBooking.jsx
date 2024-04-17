import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateBooking } from "../store/slices/booking/bookAPIs";
import useBookingInfo from "../hooks/use-booking-info";
import { useNavigate } from "react-router-dom";

const UpdateBooking = () => {
  const { books } = useBookingInfo();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkin, setCheckIn] = useState("");
  const [checkout, setCheckOut] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (books) {
      setFirstName(books?.firstName);
      setLastName(books?.lastName)
      setCheckIn(books?.checkin);
      setCheckOut(books?.checkout);
    }
  }, [books]);

  console.log(books?._id)

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateBooking({ id: books?._id, firstName, lastName, checkin, checkout }))
      .unwrap()
      .then(() => navigate("/books"));
  };

  return (
    <div className="dark-overlay">
      <div className="absolute top-1/2 start-1/2 -translate-y-1/2 -translate-x-1/2 bg-white px-5 rounded z-[1350] duration-500">
        <div className="p-10">
          <form onSubmit={handleUpdate}>
            <label htmlFor="name" className="">
              First name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="booking-input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="name" className="">
              Last name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="booking-input"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="check-in">
              Check-in date
            </label>
            <input
              type="date"
              id="check-in"
              className="booking-input"
              value={checkin}
              onChange={(e) => setCheckIn(e.target.value)}
            />
            <label htmlFor="check-out">
              Check-out date
            </label>
            <input
              type="date"
              id="check-out"
              className="booking-input"
              value={checkout}
              onChange={(e) => setCheckOut(e.target.value)}
            />
            <Button
              type="submit"
              className="py-1 mt-5 block w-full bg-emerald-400 text-white rounded-sm duration-200 hover:bg-emerald-500"
            >
              Edit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default UpdateBooking;
