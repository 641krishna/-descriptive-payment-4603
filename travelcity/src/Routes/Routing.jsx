import { Routes, Route } from "react-router-dom";
// import { Footer } from "../Components/Footer/Footer";
// import { Navbar } from "../Components/Navbar/Navbar";

import { HotelsListPage } from "../Pages/HotelListPage";
import { Home } from "../Components/Homepage/Home";
import { PaymentPage } from "../Pages/Payment_page";
import { SignInPage } from "../Pages/SignIn_Page";
import { SignUpPage } from "../Pages/SignUp_Page";

import { Carbook } from '../Components/Carbook/Carbook'
// import { Carsection } from "../Pages/Carsection";
import { Reserv } from "../Components/ReserveCar/Reserv";
import MainHotelPage from "../Pages/MainHotelPage";


export function RoutesPage() {
    return (

        <div>

            <Routes>
                <Route path="/" element={<Home />}></Route>

                <Route path="/hotels" element={<HotelsListPage />}></Route>
                <Route path="/hotels/:id" element={<MainHotelPage />}></Route>

                <Route path="/signUp" element={<SignUpPage />}></Route>
                <Route path="/signIn" element={<SignInPage />} ></Route>
                <Route path="/payment" element={<PaymentPage />}></Route>
                <Route path='/carlist' element={<Carbook />}></Route>
                <Route path='/carreserve/:id' element={<Reserv />}></Route>
            </Routes>

        </div>

    );
}