import { Routes, Route } from "react-router-dom";
import { Carbook } from "../Component/Carbook/Carbook";
import { Reserv } from "../Component/ReserveCar/Reserv";
import { PaymentPage } from "../Pages/Payment_page";


export function RoutesPage() {
    return (
        
        <div>
            <Routes>
                <Route path='/carlist' element={<Carbook/>}></Route>
                <Route path='/carreserve/:id' element={<Reserv/>}></Route>
                <Route path="/payment" element={<PaymentPage/>}></Route>
            </Routes>
        </div>
        
    );
}