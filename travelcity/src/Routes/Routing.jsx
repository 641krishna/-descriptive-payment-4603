import React from "react";
import { Routes, Route } from "react-router-dom";
import HotelList from "../Pages/Hotels/HotelList";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HotelList />}></Route>
      {/* <Route path="/hotels/:id" element={<MainHotelPage />}></Route> */}
    </Routes>
  );
};

export default Routing;
