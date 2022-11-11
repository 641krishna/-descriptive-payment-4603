import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAxios } from "../Hooks/useAxios";
import { CircularProgress } from "@material-ui/core";
import logo from "../logo.svg";
import Main from "../../Components/HotelsInfo/Main";

const HotelPage = () => {
  const { id } = useParams();
  const [list, setList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoad(true);
    axios
      .get(
        "https://6300c49f290d71b581e28acd.mockapi.io/products/"
      )
      .then((res) => {
        const { data } = res;
        console.log(data)

        setList(data);
        // console.log(data)
        setLoad(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 2500);
  }, []);

  const styles = {
    progress: {
      width: "20%",
      margin: "200px auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },

    img: {
      width: "100px",
    },
  };

  return (
    <>
      {isLoading && hotel.length > 0 ? (
        <div>
          <Main hotel={hotel[0]} id={id} />
        </div>
      ) : (
        <div style={styles.progress}>
          <img src={logo} alt="" style={styles.img} />
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default HotelPage;
