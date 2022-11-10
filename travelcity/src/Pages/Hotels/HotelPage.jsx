import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { useSearchParams } from "react-router-dom";

const HotelPage = () => {
  const { id } = useSearchParams();
  const [isLoad, setLoad] = useState(false);

  const { hotel } = useAxios(
    `https://fake-product.herokuapp.com/hotel?hotelID=${id}`
  );

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 3000),
      [];
  });

  return (
    <>
      {isLoad && hotel.length > 0 ? (
        <div></div>
      ) : (
        <div>
          <img src={logo} alt="" />
        </div>
      )}
    </>
  );
};

export default HotelPage;
