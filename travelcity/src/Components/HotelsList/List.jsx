import axios from "axios";
import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StarRateIcon from "@material-ui/icons/StarRate";
import {
  FormControl,
  FormControlLabel,
  CircularProgress,
  makeStyles,
} from "@material-ui/core";

import HotelCard from "./HotelCard";
import SearchBox from "./filters/SearchBox";
import Guest from "./filters/Guest";
import Payment from "./filters/Payment";
import Property from "./filters/Property";
import Popular from "./filters/Popular";
import Meals from "./filters/Meals";
import Services from "./filters/services";
import Ads from "./Ads";

import "./Main.css";
import logo from "../../Assests/images/logo.svg";
import styled from "styled-components";
import SliderPrice from "./filters/SliderPrice";

const useStyling = makeStyles({
  button: {
    margin: "10px 10px 0 0",
    background: "white",
    border: "0.1px solid grey",
    padding: "6ppx 0px",
  },
  selected: {
    display: "flex",
    background: "#f0f3f5",
  },
});

const Travel = styled.div`
  width: 75%;
  margin: 30px auto;
  display: grid;
  grid-template-columns: 22% 63% 15%;
  grid-gap: 1.5rem;
  .filter-title {
    font-size: 1rem;
    font-weight: 700;
    margin: 1.5rem 0;
  }
  .popular-filter {
    display: flex;
    flex-direction: column;
    color: #505c66;
  }
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
const HList = () => {
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [load, setLoad] = useState(false);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  const small = useStyling();

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const handQuery = (value) => {
    searchInfo(value);
    setSearch(value);

    function searchInfo(banu) {
      banu = banu.toLowerCase();
      let searchedInfo = list.filter(function (list) {
        if (list.name.toLowerCase().includes(banu)) {
          return true;
        }
        return false;
      });
      if (searchedInfo.length == 0 || value === "") getData();
      else setList(searchedInfo);
    }
  };

  const handleChange = (event) => {
    const range = event.target.value.split(" ").map(Number);
    setFilter(event.target.value);
    handleFilter(range[0], range[1]);
  };

  const handleFilter = (a, b) => {
    setLoad(true);
    const newData = data.filter((ele) => {
      return ele.price >= a && ele.price < b;
    });
    setList(newData);
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  };

  const getData = () => {
    setLoad(false);
    axios
      .get("https://fake-product.herokuapp.com/hotel")
      .then((res) => {
        const { data } = res;
        setData(data);
        setList(data);
        setLoad(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handStar = useCallback(
    (star) => {
      setLoad(true);
      const newData = data.filter((ele) => {
        return ele.starRating >= star;
      });
      setList(newData);

      setTimeout(() => {
        setLoad(false);
      }, 2000);
    },
    [data]
  );
  const openModal = (id) => {
    navigate(`/hotel/${id}`);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {/* datesearchbar */}

      <Travel className="Travel">
        <div>
          <iframe
            style={{ border: "1px solid grey", marginTop: "8px" }}
            width="220"
            height="150"
            src={`https://maps.google.com/maps?q=Goa&t=&z=15&ie=UTF8&iwloc=&output=embed`}
          ></iframe>
          <SearchBox handQuery={handQuery} query={search} />

          {/* sliderprice */}
          <SliderPrice />

          {/* guest rating */}
          <Guest />

          {/* ======star rating ==========*/}
          <div className="filter-title">Property category</div>
          <Button
            onClick={() => {
              handStar(1);
            }}
            className={small.button}
            variant="contained"
            color="default"
            endIcon={<StarRateIcon />}
          >
            1
          </Button>
          <Button
            onClick={() => {
              handStar(2);
            }}
            className={small.button}
            variant="contained"
            color="default"
            endIcon={<StarRateIcon />}
          >
            2
          </Button>
          <Button
            onClick={() => {
              handStar(3);
            }}
            className={small.button}
            variant="contained"
            color="default"
            endIcon={<StarRateIcon />}
          >
            3
          </Button>
          <Button
            onClick={() => {
              handStar(4);
            }}
          >
            4
          </Button>
          <Button
            onClick={() => {
              handStar(5);
            }}
            className={small.button}
            variant="contained"
            color="default"
            endIcon={<StarRateIcon />}
          >
            5
          </Button>

          {/* ====payment type=== */}
          <Payment />

          {/* =====budget rating===== */}
          <div className="filter-title">Your Budget</div>
          <div className="popular-filter">
            <FormControl as="fieldset">
              <RadioGroup
                aria-label="guest-rating"
                name="guest-rating"
                value={filter}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="0 75"
                  control={<Radio color="primary" />}
                  label="Less than 75$"
                />
                <FormControlLabel
                  value="75 125"
                  control={<Radio color="primary" />}
                  label="75$ to 125$"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="125 200"
                  control={<Radio color="primary" />}
                  label="125$ to 200$"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="200 300"
                  control={<Radio color="primary" />}
                  label="200$ to 300$"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="300 1000"
                  control={<Radio color="primary" />}
                  label="300$ and above"
                  labelPlacement="end"
                />
              </RadioGroup>
            </FormControl>
          </div>

          {/*===== popularfilter  type property popular loc meal =======*/}
          <Property />
          <Popular />
          <Services />
          <Meals />
        </div>

        {/* +===hotlelist==== */}
        <div className="list">
          {load ? (
            <div className="progressimpo">
              <img src={logo} alt="" />
              <CircularProgress />
            </div>
          ) : list.length >= 1 ? (
            list.map((ele) => {
              return (
                <HotelCard openModal={openModal} key={ele.hotelId} data={ele} />
              );
            })
          ) : (
            <h1
              style={{ color: "red", textAlign: "center", marginTop: "300px" }}
            >
              No Hotels Exist!
            </h1>
          )}
        </div>
        {/* ========Ads====== */}
        <div className="adSec">
          <Ads />
          <Ads />
        </div>
      </Travel>
    </div>
  );
};

export default HList;
