import { Routes, Route } from "react-router-dom";
import { HotelsListPage } from "../Pages/HotelListPage";
import { Home } from "../Components/Homepage/Home";
import { PaymentPage } from "../Pages/Payment_page";
import { SignInPage } from "../Pages/SignIn_Page";
import { SignUpPage } from "../Pages/SignUp_Page";

import { Carbook } from '../Components/Carbook/Carbook'
import { Reserv } from "../Components/ReserveCar/Reserv";
import MainHotelPage from "../Pages/MainHotelPage";
import Privateroute from "../Components/private/private";


export function RoutesPage() {
    return (

        <div>

            <Routes>
                <Route path="/" element={<Privateroute><Home /></Privateroute>}></Route>
                <Route path="/hotels" element={<Privateroute><HotelsListPage /></Privateroute>}></Route>
                <Route path="/hotels/:id" element={<Privateroute><MainHotelPage /></Privateroute>}></Route>
                <Route path="/signUp" element={<SignUpPage />}></Route>
                <Route path="/signIn" element={<SignInPage />} ></Route>
                <Route path="/payment" element={<Privateroute><PaymentPage /></Privateroute>}></Route>
                <Route path='/carlist' element={<Privateroute><Carbook /></Privateroute>}></Route>
                <Route path='/carreserve/:id' element={<Privateroute><Reserv /></Privateroute>}></Route>
            </Routes>

        </div>

    );
}