import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = (url) => {
    const [hotel, setHotel] = useState([]);

    useEffect(() => {
        (async () => {
            let { data } = await axios.get(url);
            setHotel(data)
        })()
    }, [url])

    return { hotel }
}

export default useAxios;