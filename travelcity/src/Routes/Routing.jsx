import { Routes, Route } from "react-router-dom";
import { HotelsListPage } from "../Pages/HotelListPage";
import MainHotelPage from "../Pages/MainHotelPage";


export function RoutesPage() {
    return (

        <div>

            <Routes>
                <Route path="/hotels" element={<HotelsListPage />}></Route>
                <Route path="/hotels/:id" element={<MainHotelPage />}></Route>
            </Routes>

        </div>

    );
}