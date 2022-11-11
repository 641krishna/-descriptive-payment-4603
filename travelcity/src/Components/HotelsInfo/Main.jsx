import React, { useEffect, useState } from "react";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Link, useNavigate, useParams } from "react-router-dom";
import Ads from "../HotelsList/Ads";

import axios from "axios";
import styled from "styled-components";
import "./Main2.css";

import Rooms from "./Rooms";
import Review from "./Review";
import About from "./About";

const Travel = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #242c33;
  }

  .container {
    background: #f0f3f5;
    text-align: justify;
  }

  .mainBox {
    width: 80%;
    margin: 0 auto;
    display: flex;
    gap: 22px;
  }

  .flex {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #2a6ec1;
    padding: 4px 12px;
    background: #fff;
    font-size: 14px;
  }

  .flex > :nth-child(n):hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .content {
    flex-grow: 1;
  }
`;

const Main = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const options = [
    { title: "Overview", to: "#" },
    { title: "Rooms", to: "#rooms" },
    { title: "Reviews", to: "#reviews" },
  ];

  // console.log(id);
  const getData = () => {
    axios
      .get(`https://6300c49f290d71b581e28acd.mockapi.io/products/${id}`)
      .then((res) => {
        const { data } = res;
        console.log(data);

        setData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navigate = useNavigate();

  useEffect(() => {
    getData();
    // axios
    //   .get(`https://6300c49f290d71b581e28acd.mockapi.io/products/${id}`)
    //   .then(({ data }) => {
    //     setData(data);
    //     console.log(data)
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  return (
    <Travel>
      <div className="container">
        <div className="mainBox">
          <div className="content">
            <div className="flex">
              <KeyboardBackspaceIcon onClick={() => navigate(`/hotel`)} />
              <p onClick={() => navigate(`/hotel`)}>See all properties</p>
            </div>

            <div>
              <div className="flex" style={{ cursor: "pointer" }}>
                <div className="left">
                  <img src={data.images[0].url} alt="" />
                </div>
                <div className="right">
                  <div>
                    <img src={data.images[1].url} alt="" />
                  </div>
                  <div>
                    <img src={data.images[2].url} alt="" />
                  </div>
                  <div>
                    <img src={data.images[3].url} alt="" />
                  </div>
                  <div>
                    <img src={data.images[4].url} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="option">
              {options.map((option, i) => (
                <p key={i}>
                  <a href={option.to}>{option.title}</a>
                </p>
              ))}
              <button className="optionBtn">
                <a href="#rooms">Reserve a room</a>
              </button>
            </div>
            
            <div id="location">
              <About />
            </div>

            <div id="reviews">
              <Review />
            </div>
          </div>

          <div>
            <div style={{ position: "sticky", top: "10px" }}>
              <Ads />
            </div>
          </div>
        </div>
      </div>
    </Travel>
  );
};

export default Main;
