import { Card, Typography } from "@material-tailwind/react";
import useBookingInfo from "../../hooks/use-booking-info";
import { deleteBooking } from "../../store/slices/booking/bookAPIs";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import TableSkeleton from "../loader/TableSkeleton";
import { useState } from "react";
import DeleteConfirm from "../messages/DeleteConfirm";

const TABLE_HEAD = ["Name", "Phone", "Hotel", "Checkin", "Checkout", "Action"];

const NextBookingTable = () => {
  const { books, load, fallDate } = useBookingInfo();
  const [popup, setPopup] = useState({show: false, id: null});
  const dispatch = useDispatch();

  const deleteBook = (id) => {
    if (window.confirm(`Do You Realy Want To Delete This Booking`)) {
      dispatch(deleteBooking(id));
    }
  };

  const handleDelete = (id) =>{
    setPopup({
      show: true,
      id
    })
  }

  const handleDeleteTrue = () =>{
    if(popup.show && popup.id){
      dispatch(deleteBooking(popup.id));
      setPopup({
        show: false,
        id: null
      })
    }
  }

  const close = () =>{
    setPopup({
      show: false,
      id: null
    })
  }

  return (
    <>
    <DeleteConfirm show={popup.show} handleDelete={handleDeleteTrue} close={close} />
      {load ? (
        <TableSkeleton />
      ) : books?.length >= 1 ? (
        <Card className="h-full w-full overflow-scroll lg:overflow-hidden rounded mb-14">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr className="text-center">
                {TABLE_HEAD.map((head, index) => (
                  <th
                    key={index}
                    className="border-b border-gray-300 bg-slate-800 text-white p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {books?.map(
                (
                  {
                    _id,
                    firstName,
                    lastName,
                    phone,
                    checkin,
                    checkout,
                    hotelId,
                  },
                  index
                ) => {
                  const isLast = index === books.length - 1;
                  const classes = isLast ? "p-4" : "p-4";

                  return (
                    fallDate <= new Date(checkin) && (
                      <tr key={_id} className="even:bg-slate-200 text-center">
                        <td>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {`${firstName} ${lastName}`}
                          </Typography>
                        </td>
                        <td>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {phone}
                          </Typography>
                        </td>
                        <td>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {hotelId.name}
                          </Typography>
                        </td>
                        <td className={`${classes}`}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {checkin.split("T")[0]}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {checkout.split("T")[0]}
                          </Typography>
                        </td>
                        <td
                          className={`${classes} flex justify-center items-center gap-5`}
                        >
                          <Link to={`/books/${_id}`}>
                            <i className="fa-solid fa-edit text-blue-500 cursor-pointer"></i>
                          </Link>
                          <i
                            className="fa-solid fa-trash text-red-500 cursor-pointer"
                            onClick={() => handleDelete(_id)}
                          ></i>
                        </td>
                      </tr>
                    )
                  );
                }
              )}
            </tbody>
          </table>
        </Card>
      ) : (
        <div className="fixed text-center top-1/2 -translate-y-1/2 end-1/2 translate-x-1/2">
          <i className="fa-solid fa-calendar fa-3x text-blue-500 mb-5"></i>
          <p className="text-[30px]">You are not booking yet </p>
        </div>
      )}
    </>
  );
};

export default NextBookingTable;
