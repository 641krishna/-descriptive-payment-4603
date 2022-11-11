import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Payment } from "../Component/Payment/Payment";
import { useAxios } from "../Hooks/useAxios";

export const PaymentPage = () => {
    const { id } = useParams();
    const { hotelData } = useAxios(`https://my-api-data.herokuapp.com/data/?hotelId=${id}`);
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