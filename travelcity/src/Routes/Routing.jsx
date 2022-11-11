import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Components/HotelsInfo/Main";
import HotelList from "../Pages/Hotels/HotelList";

const Routing = () => {
  return (
    <Routes>
      <Route path="/hotel" element={<HotelList />}></Route>
      <Route path="/hotel/:id" element={<Main />}></Route>
    </Routes>
  );
};

export default Routing;
