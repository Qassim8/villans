import { Button } from "@material-tailwind/react";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../../store/slices/auth/authAPIs";
import Success from "../../components/messages/Success";
import { clearSucces } from "../../store/slices/auth/authSlice";
import { useFormik } from "formik";
import { RegisterSchema } from "../../utils/FormSchema";

const Register = () => {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      role: "user",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      dispatch(
        userRegister({
          username: values.username,
          email: values.email,
          password: values.password,
          role: values.role,
        })
      );
    },
  });
  useEffect(() => {
    if (success) {
      setShow(true);
      setVisible(false);
    } else if (error) {
      setVisible(true);
    }
  }, [success, error]);

  const close = useCallback(() => {
    dispatch(clearSucces());
    setShow(false);
  }, [dispatch]);

  return (
    <>
      <section className="relative h-screen overlay sign-background">
        <Success
          open={show}
          text={"new account created"}
          path={"/login"}
          btnName={"login now"}
          close={close}
        />
        <div className="contain relative top-1/2 -translate-y-1/2 max-w-[650px]">
          <div className="flex box-shadow">
            <div className="hidden md:block relative w-[45%] px-5 bg-blue-500/60 text-center rounded-s-md">
              <div className="absolute w-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 px-10">
                <h3 className="relative text-white font-bold pb-2 mb-2 after:absolute after:h-[1px] after:w-[30px] after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:bg-white">
                  Welcome Back!
                </h3>
                <p className="text-white py-5 mb-5">
                  To keep connected with us please login with your personal info
                </p>
                <Link
                  to={"/login"}
                  className="py-2 px-6 font-normal text-white rounded-3xl border border-white hover:bg-white hover:text-blue-500/80 duration-200"
                >
                  Login
                </Link>
              </div>
            </div>
            <div className="relative bg-white w-full md:w-[65%] py-10 md:rounded-e-md">
              <div className="text-center">
                <h3 className="relative text-blue-500 font-bold pb-2 mb-10 after:absolute after:h-[1px] after:w-[30px] after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:bg-blue-500">
                  Create new Account
                </h3>
                <form onSubmit={formik.handleSubmit}>
                  {visible && (
                    <p className="auth-input bg-red-100 text-red-500 border-none rounded-sm">
                      {error}
                    </p>
                  )}
                  <input
                    type="text"
                    className="auth-input"
                    placeholder="Your Name"
                    name="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                  />
                  {formik.errors.username && formik.touched.username ? (
                    <div className="text-red-500 text-[12px] mb-3 text-start ms-7">
                      {formik.errors.username}
                    </div>
                  ) : null}
                  <input
                    type="email"
                    className="auth-input"
                    placeholder="Your Email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <div className="text-red-500 text-[12px] mb-3 text-start ms-7">
                      {formik.errors.email}
                    </div>
                  ) : null}
                    <input
                      type="password"
                      className="auth-input mt-0"
                      placeholder="**********"
                      name="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                  {formik.errors.password && formik.touched.password ? (
                    <div className="text-red-500 text-[12px] mb-3 me-1 text-start ms-7">
                      {formik.errors.password}
                    </div>
                  ) : null}
                  {loading ? (
                    <Button className="mx-auto flex items-center justify-center py-2 mt-3 font-normal text-white bg-blue-400 rounded-3xl border">
                      <i className="fa-solid fa-spinner fa-spin-pulse mr-2"></i>
                      <p>Loading</p>
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="py-2 mt-3 font-normal text-white bg-blue-600 rounded-3xl border border-blue-600 hover:bg-white hover:text-blue-600 duration-200 outline-none"
                    >
                      Sign up
                    </Button>
                  )}

                  <div className="block md:hidden">
                    <p className="py-2">or</p>
                    <Link to={"/login"} className="text-blue-500 underline">
                      Signin
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Register;
