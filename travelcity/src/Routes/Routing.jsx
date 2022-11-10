import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer } from '../Components/Footer/Footer'
import { Home } from '../Components/Homepage/Home'
export default function Routing() {
    return (
        <div>
            {/* <Navbar /> */}
            <Routes>
                <Route path='/' element={< Home />}></Route>
                {/* <Route path="/hotels" element={<HotelsListPage />}></Route>
                <Route path="/hotels/:id" element={<MainHotelPage />} ></Route>
                <Route path="/signUp" element={<SignUpPage />}></Route>
                <Route path="/signIn" element={<SignInPage />} ></Route>
                <Route path="/payment" element={<PaymentPage />}></Route>
                <Route path='/carlist' element={<Carsection />}></Route>
                <Route path='/carreserve/:id' element={<Reserv />}></Route> */}
            </Routes>
            <Footer />
        </div>
    )
}
