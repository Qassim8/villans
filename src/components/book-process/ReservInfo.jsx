import { Button } from "@material-tailwind/react";
import { useFormik } from "formik";
import { BookingSchema } from "../../utils/FormSchema";

const ReservInfo = ({ next }) => {

  const date = new Date();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      checkin: date,
      checkout: date,
      today: date,
    },
    validationSchema: BookingSchema,
    onSubmit: (values) => {
      localStorage.setItem(
        "bookData",
        JSON.stringify({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: values.phone,
          checkin: values.checkin,
          checkout: values.checkout,
        })
      );
      next();
    },
  });

  return (
    <form
      className="relative start-1/2 -translate-x-1/2 mt-5 py-5 w-[250px] md:w-[700px]"
      method="POST"
      onSubmit={formik.handleSubmit}
    >
      <h2 className="font-bold">Who's Checking in?</h2>
      <div className="flex flex-col md:flex-row md:justify-between md:gap-11 py-5">
        <div className="flex flex-col w-full">
          <label htmlFor="fname" className="">
            First name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fname"
            placeholder="Your first name"
            className="booking-input"
            name="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.errors.firstName && formik.touched.firstName ? (
            <div className="text-red-500 text-[12px] mb-2">
              {formik.errors.firstName}
            </div>
          ) : null}
          <label htmlFor="lname" className="">
            Last name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lname"
            placeholder="Your Last name"
            className="booking-input"
            name="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          {formik.errors.lastName && formik.touched.lastName ? (
            <div className="text-red-500 text-[12px] mb-2">
              {formik.errors.lastName}
            </div>
          ) : null}
          <label htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your email address"
            className="booking-input"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="text-red-500 text-[12px]">
              {formik.errors.email}
            </div>
          ) : null}
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="phone">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="phone"
            placeholder="Your phone number"
            className="booking-input"
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          {formik.errors.phone && formik.touched.phone ? (
            <div className="text-red-500 text-[12px] mb-2">
              {formik.errors.phone}
            </div>
          ) : null}
          <label htmlFor="check-in">
            Check-in date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="check-in"
            className="booking-input"
            name="checkin"
            onChange={formik.handleChange}
            value={formik.values.checkin}
            defaultValue={undefined}
          />
          {formik.errors.checkin && formik.touched.checkin ? (
            <div className="text-red-500 text-[12px] mb-2">
              {formik.errors.checkin}
            </div>
          ) : null}
          <label htmlFor="check-out">
            Check-out date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="check-out"
            className="booking-input"
            name="checkout"
            onChange={formik.handleChange}
            value={formik.values.checkout}
          />
          {formik.errors.checkout && formik.touched.checkout ? (
            <div className="text-red-500 text-[12px]">
              {formik.errors.checkout}
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-11 pb-3">
        <Button
          type="submit"
          className="w-full bg-blue-500 mt-2 py-2 font-normal text-[15px] outline-none rounded duration-200 hover:bg-blue-600"
        >
          Save and continue
        </Button>

        <Button
          type="reset"
          className="w-full bg-red-500 mt-2 py-2 font-normal text-[15px] outline-none rounded duration-200 hover:bg-red-600"
        >
          Remove
        </Button>
      </div>
    </form>
  );
};
export default ReservInfo;
