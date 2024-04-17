import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import Hotels from "../pages/Hotels";
import Favourite from "../pages/Favourite";
import HoltelDetails from "../pages/HotelDetails";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import RoomDetails from "../pages/RoomDetails";
import UpdateBooking from "../pages/UpdateBooking";
import NextBookingTable from "../components/booking/NextBookingTable";
import PrevBookingTable from "../components/booking/PrevBookingTable";
import Books from "../pages/Books";
import Reservetion from "../pages/Reservation";
import ProtectedRoutes from "../components/ProtectedRoute";
import NotFoundPage from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFoundPage />
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <RootLayout /> }],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/hotels",
    element: <Hotels />,
  },
  {
    path: "hotels/:id",
    element: <HoltelDetails />,
  },
  {
    path: "hotels/:id/:id",
    element: <RoomDetails />,
  },
  {
    path: "hotels/:id/:id/reserv",
    element: (
      <ProtectedRoutes>
        <Reservetion />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/books",
    element: (
      <ProtectedRoutes>
        <Books />
      </ProtectedRoutes>
    ),
    children: [
      { index: true, element: <NextBookingTable /> },
      { path: "books/next", element: <NextBookingTable /> },
      { path: "books/prev", element: <PrevBookingTable /> },
    ],
  },
  {
    path: "/books/:id",
    element: <UpdateBooking />,
  },
  {
    path: "/fav",
    element: (
      <ProtectedRoutes>
        <Favourite />
      </ProtectedRoutes>
    ),
  },
]);
