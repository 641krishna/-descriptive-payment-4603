import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Payment } from "../Components/Payment/Payment"
import { useAxios } from "../Hooks/useAxios";

export const PaymentPage = () => {
    const { id } = useParams();
    const { hotelData } = useAxios(`https://travelocity.onrender.com/hotel?hotelId=${id}`);
    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => { }, 2500);
    }, []);

    return (
        <>
            <Payment hotelData={hotelData} />
        </>
    );
};