import useProtectRoute from '../hooks/use-protect-route';
import {Link} from 'react-router-dom'

const ProtectedRoutes = ({children})=>{
    const { userToken } = useProtectRoute();

    return userToken ? (
      children
    ) : (
      <div className="relative h-screen bg-blue-300 text-center">
        <div className="absolute top-1/2 end-1/2 -translate-y-1/2 translate-x-1/2">
          <div className="">
            <h1 className="text-[50px] font-bold text-blue-600"><i class="fa-solid fa-triangle-exclamation text-amber-300"></i> You are not loggedin</h1>
            <div className="text-white">
              <p className="text-[14px]">
                Please login first to browse this page
              </p>
              <p className="text-[14px]">
                You may go to
                <Link to={"/login"} className="text-blue-600 font-bold">
                  login page
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ProtectedRoutes;