import * as Yup from "yup";

const passwordValidate = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
const phoneValidate =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .matches(/^(?=.*[a-z A-Z])/, "user name can be only characters!")
    .min(10, "must be more than 10 characters!")
    .max(20, "must be less than 20 characters!")
    .required("user name is required!"),
  email: Yup.string().email("invalid email!").required("email is required!"),
  password: Yup.string()
    .matches(
      passwordValidate,
      "Password must contain 8 characters, one uppercase, one lowercase, one number"
    )
    .required("password is required"),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("invalid email!").required("email is required!"),
  password: Yup.string()
    .matches(
      passwordValidate,
      "Password must contain 8 characters, one uppercase, one lowercase, one number"
    )
    .required("password is required"),
});

export const BookingSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^(?=.*[a-z A-Z])/, "first name can be only characters!")
    .min(4, "must be more than 4 characters!")
    .max(15, "must be less than 15 characters!")
    .required("first name is required!"),
  lastName: Yup.string()
    .matches(/^(?=.*[a-z A-Z])/, "last name can be only characters!")
    .min(4, "must be more than 4 characters!")
    .max(15, "must be less than 15 characters!")
    .required("last name is required!"),
  email: Yup.string().email("Invalid email!").required("email is required!"),
  phone: Yup.string()
    .matches(phoneValidate, "invalid phone number!")
    .required("phone number is required!"),
  checkin: Yup.date()
    .when(
      "today",
      (today, yup) =>
        today && yup.min(today, `check in date cannot be before today!`)
    )
    .required("check in date is required!"),
  checkout: Yup.date()
    .when(
      "checkin",
      (checkin, schema) =>
        checkin &&
        schema.min(checkin, "check out date cannot be before check in!")
    )
    .required("check out date is required!"),
});

export const PaymentgSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^(?=.*[a-z A-Z])/, "name can be only characters!")
    .min(8, "must be more than 8 characters!")
    .max(20, "must be less than 20 characters!")
    .required("first name is required!"),
  card_no: Yup.string()
    .matches(/^(?=.*[0-9])(?=.{8,})/, "must be 8 numbers!")
    .required("Card number is required!"),
  secret_code: Yup.string()
    .matches(/^(?=.*[0-9])(?=.{7,})/, "must be number and must be 7 numbers!")
    .max(7, "must be 7 numbers!")
    .required("secret number is required!"),
  end_date: Yup.date()
    .when(
      "today",
      (today, yup) => today && yup.min(today, `Your card is expired!`)
    )
    .required("expiration date is required!"),
});

