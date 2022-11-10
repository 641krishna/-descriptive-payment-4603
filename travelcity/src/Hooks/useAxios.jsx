import { axios } from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useAxios = (url) => {
  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    async () => {
      let { data } = await axios.get(url);
      setHotel(data);
    };
  }, [url]);

  return { hotel };
};

export default useAxios;
