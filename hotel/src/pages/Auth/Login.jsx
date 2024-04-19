import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../store/slices/auth/authAPIs";
import { clearSucces } from "../../store/slices/auth/authSlice";
import { useFormik } from "formik";
import { LoginSchema } from "../../utils/FormSchema";

const Login = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { loading, userInfo, erorr } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      dispatch(
        userLogin({
          email: values.email,
          password: values.password,
        })
      );
    },
  });

  useEffect(() => {
    if (userInfo) {
      navigate("/villans");
      dispatch(clearSucces());
      setShow(false)
    }
    else if (erorr) {
      setShow(true);
    }
  }, [userInfo, navigate, dispatch, erorr]);

  return (
    <>
      <section className="relative h-screen overlay bg-slate-200 sign-background">
        <div className="contain relative top-1/2 -translate-y-1/2 max-w-[650px]">
          <div className="flex rounded-md box-shadow">
            <div className="w-full md:w-[65%] py-10 bg-white md:rounded-s-md">
              <div className="text-center">
                <h3 className="relative text-blue-500 font-bold pb-2 mb-10 after:absolute after:h-[1px] after:w-[30px] after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:bg-blue-500">
                  Login to Account
                </h3>
                <form onSubmit={formik.handleSubmit}>
                  {show && (
                    <p className="auth-input bg-red-100 text-red-500 border-none rounded-sm">
                      invalid user information!
                    </p>
                  )}
                  <input
                    type="email"
                    className="auth-input"
                    placeholder="Your Email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <div className="text-red-500 text-[12px] text-start ms-7 mb-2">
                      {formik.errors.email}
                    </div>
                  ) : null}
                  <input
                    type="password"
                    className="auth-input"
                    placeholder="**********"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  {formik.errors.password && formik.touched.password ? (
                    <div className="text-red-500 text-[12px] text-start ms-7 mb-2 me-2">
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
                      className="py-2 mt-3 font-normal text-white bg-blue-600 rounded-3xl border border-blue-600 hover:bg-white hover:text-blue-600 duration-200"
                    >
                      Login
                    </Button>
                  )}
                  <div className="block md:hidden">
                    <p className="py-2">or</p>
                    <Link to={"/register"} className="text-blue-500 underline">
                      Signup
                    </Link>
                  </div>
                </form>
              </div>
            </div>
            <div className="hidden md:block relative md:w-[45%] bg-blue-500/60 text-center rounded-e-md">
              <div className="absolute w-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 px-10">
                <h3 className="relative text-white font-bold pb-2 mb-2 after:absolute after:h-[1px] after:w-[30px] after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:bg-white">
                  Hello, There
                </h3>
                <p className="text-white py-5 mb-3">
                  Full up personal information and start journy with us
                </p>

                <Link
                  to={"/register"}
                  onClick={() => setShow(false)}
                  className="py-2 px-6 font-normal text-white rounded-3xl border border-white hover:bg-white hover:text-blue-500/80 duration-200"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
