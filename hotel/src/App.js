import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import NotFoundPage from "./pages/NotFoundPage";
import Register from "./pages/Auth/Register";
import Hotels from "./pages/Hotels";
import HoltelDetails from "./pages/HotelDetails";
import RoomDetails from "./pages/RoomDetails";
import Reservetion from "./pages/Reservation";
import Books from "./pages/Books";
import NextBookingTable from "./components/booking/NextBookingTable";
import PrevBookingTable from "./components/booking/PrevBookingTable";
import ProtectedRoutes from "./components/ProtectedRoute";
import UpdateBooking from "./pages/UpdateBooking";
import Favorite from "./pages/Favourite";
import RootLayout from "./pages/RootLayout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<RootLayout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotels/:id" element={<HoltelDetails />} />
          <Route path="/hotels/:id/:id" element={<RoomDetails />} />
          <Route
            path="/hotels/:id/:id/reserv"
            element={
              <ProtectedRoutes>
                <Reservetion />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/books"
            element={
              <ProtectedRoutes>
                <Books />
              </ProtectedRoutes>
            }
          >
            <Route index element={<NextBookingTable />} />
            <Route path="next" element={<NextBookingTable />} />
            <Route path="prev" element={<PrevBookingTable />} />
          </Route>
          <Route path="/books/:id" element={<UpdateBooking />} />
          <Route path="/fev" element={<Favorite />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
