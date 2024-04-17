import { useCallback, useState } from "react";
import { useDispatch } from "react-redux"
import { logOut } from "../store/slices/auth/authSlice";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const useProtectRoute = () =>{
    const cookie = new Cookies()
    const userToken = cookie.get("userToken") ? cookie.get("userToken") : null;
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const open = () =>{
        setShow(true);
    }
    const close = () =>{
        setShow(false);
    }
    const logUserOut = useCallback(() =>{
        dispatch(logOut())
        navigate('/')
    },[navigate, dispatch])

    return {userToken, logUserOut, show, open, close}
}

export default useProtectRoute;