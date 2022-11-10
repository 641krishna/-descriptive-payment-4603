import { CircularProgress } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";

import logo from "../../Assests/images/logo.svg";
import HList from "../../Components/HotelsList/List";

import styled from "styled-components";
const Travel = styled.div`
  .progress {
    width: 20%;
    margin: 200px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .progress > img {
    margin-bottom: 10px;
    width: 100px;
  }
`;
const HotelList = () => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  });

  return (
    <Travel>
      {load ? (
        <Travel>
          <div className="progress">
            <img src={logo} alt="" />
            <CircularProgress />
          </div>
        </Travel>
      ) : (
        <HList />
      )}
    </Travel>
  );
};

export default HotelList;
