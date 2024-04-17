import { Button } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { newBooking } from "../../store/slices/booking/bookAPIs";
import { newPay } from "../../store/slices/payment/payAPIs";
import Success from "../messages/Success";
import {
  changeError,
  changeSuccess,
} from "../../store/slices/payment/paySlice";
import master from "../../hotels img/card_11041055.png";
import visa from "../../hotels img/card_11041038.png";
import paypal from "../../hotels img/paypal_349247.png";
import Faild from "../messages/Faild";
import useBookingInfo from "../../hooks/use-booking-info";
import { changeErorr } from "../../store/slices/booking/bookSlice";
import { useFormik } from "formik";
import { PaymentgSchema } from "../../utils/FormSchema";

const PaymentInfo = ({ prev }) => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const { load, success, error } = useSelector((state) => state.pay);
  const { loading, succes, erorr } = useBookingInfo();
  const dispatch = useDispatch();

  useEffect(() => {
    if (succes && success) {
      setOpen(true);
    }
  }, [succes, success]);

  useEffect(() => {
    if (error || erorr) {
      setShow(true);
    }
  }, [erorr, error]);

  const close = () => {
    setOpen(false);
    dispatch(changeSuccess());
  };

  const hide = () => {
    setShow(false);
    dispatch(changeErorr(), changeError());
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      card_no: "",
      end_date: "",
      secret_code: "",
      today: new Date(),
    },
    validationSchema: PaymentgSchema,
    onSubmit: (values) => {
      const bookData = JSON.parse(localStorage.getItem("bookData"));
      dispatch(
        newPay({
          name: values.name,
          card_no: values.card_no,
          end_date: values.end_date,
          secret_code: values.secret_code,
        })
      );
        dispatch(newBooking(bookData));
    },
  });

  return (
    <>
      <div className="relative start-1/2 -translate-x-1/2 mt-5 py-5 w-[250px] md:w-[700px]">
        <h2 className="font-bold">Payment method</h2>
        <div className="flex items-center gap-3 mt-5">
          <img src={visa} alt="visacard" className="h-7" />
          <img src={master} alt="mastercard" className="h-7" />
          <img src={paypal} alt="mastercard" className="h-10" />
          <i className="fa-brands fa-cc-apple-pay fa-2x text-slate-800"></i>
        </div>
        <div className="pt-5 pb-8">
          <form className="flex flex-col" onSubmit={formik.handleSubmit}>
            <label htmlFor="nameOnCard">
              Name on card<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="nameOnCard"
              placeholder="Name on card"
              className="booking-input"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.errors.name && formik.touched.name ? (
              <div className="text-red-500 text-[12px] mb-2">
                {formik.errors.name}
              </div>
            ) : null}
            <label htmlFor="number">
              Debit/Credit card number
              <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="number"
              placeholder="Number of card"
              className="booking-input"
              name="card_no"
              onChange={formik.handleChange}
              value={formik.values.card_no}
            />
            {formik.errors.card_no && formik.touched.card_no ? (
              <div className="text-red-500 text-[12px] mb-2">
                {formik.errors.card_no}
              </div>
            ) : null}
            <label htmlFor="date">
              Expiration date
              <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="date"
              placeholder="exdate"
              className="booking-input"
              name="end_date"
              onChange={formik.handleChange}
              value={formik.values.end_date}
            />
            {formik.errors.end_date && formik.touched.end_date ? (
              <div className="text-red-500 text-[12px] mb-2">
                {formik.errors.end_date}
              </div>
            ) : null}
            <label htmlFor="secure">
              Security code
              <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="secure"
              placeholder="0000000"
              className="booking-input"
              name="secret_code"
              onChange={formik.handleChange}
              value={formik.values.secret_code}
            />
            {formik.errors.secret_code && formik.touched.secret_code ? (
              <div className="text-red-500 text-[12px]">
                {formik.errors.secret_code}
              </div>
            ) : null}
            <div className="flex flex-col md:flex-row md:gap-11">
              {loading || load ? (
                <Button className="w-full flex items-center justify-center py-2 mt-3 font-normal text-white bg-blue-400 border">
                  <i className="fa-solid fa-spinner fa-spin-pulse mr-2"></i>
                  <p>Loading</p>
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="w-full bg-blue-500 mt-3 py-2 font-normal text-[15px] outline-none rounded duration-200 hover:bg-blue-600"
                >
                  Pay
                </Button>
              )}

              <Button
                onClick={() => prev()}
                className="w-full bg-red-500 mt-3 py-2 font-normal text-[15px] outline-none rounded duration-200 hover:bg-red-600"
              >
                Back
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Success
        open={open}
        text="Booking done successfuly"
        path="/books"
        btnName="show book"
        func={close}
        close={close}
      />
      <Faild
        open={show}
        error={
          "something wrong please check your internet connection and try again"
        }
        close={hide}
      />
    </>
  );
};
export default PaymentInfo;
