import { Link } from "react-router-dom";

const NotFoundPage = () =>{
    return (
      <div className="relative h-screen bg-blue-300">
        <div className="absolute top-1/2 end-1/2 -translate-y-1/2 translate-x-1/2">
          <div className="">
            <h1 className="text-[130px] font-bold text-blue-600">404</h1>
            <div className="text-white">
              <span className="text-[20px] mb-3">
                <i class="fa-solid fa-triangle-exclamation text-amber-300"></i>{" "}
                Oops! page not found
              </span>
              <p className="text-[14px]">
                The page you are looking for was not found
              </p>
              <p className="text-[14px]">
                You may return to <Link to={'/'} className="text-blue-600 font-bold">home page</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}
export default NotFoundPage;