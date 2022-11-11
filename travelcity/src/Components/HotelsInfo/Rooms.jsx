import React, { useState } from "react";
import { BiInfoCircle } from "react-icons/bi";
import SquareFootIcon from "@material-ui/icons/SquareFoot";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import GroupIcon from "@material-ui/icons/Group";
import WifiIcon from "@material-ui/icons/Wifi";
import HotelIcon from "@material-ui/icons/Hotel";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { Box, Modal, Radio, RadioGroup } from "@material-ui/core";
import { FormControlLabel } from "@mui/material";
const Travel = styled.div`
  .room_div {
    margin-top: 16px;
    border: 1px solid rgb(143, 141, 141);
    border-radius: 10px;
    background: #fff;
  }

  .room_div img {
    width: 100%;
    height: 200px;
    border-radius: 10px 10px 0 0;
    position: relative;
    top: -1px;
    cursor: pointer;
  }

  .room_details {
    padding: 8px;
  }

  .room_details > :nth-child(n) {
    margin-top: -10px;
  }

  .room_details > small {
    font-size: 11.5px;
    color: #505c66;
  }

  .green,
  .green + span {
    color: green;
    cursor: pointer;
  }

  .more,
  .more + span {
    color: #2a6ec1;
    cursor: pointer;
  }

  .more + span {
    margin-top: 3.5px;
    margin-left: -8px;
    font-size: 18px;
  }

  .flex_1 {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: #505c66;
  }

  .line {
    border-bottom: 1px solid rgb(143, 141, 141);
    margin: 16px auto;
  }

  .flex_2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    color: #505c66;
  }

  .h3_price {
    margin: 0;
    margin-top: 40px;
  }

  .flex_small {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .flex_2 > button,
  .flex_4 button {
    padding: 8px 16px;
    background: #2a6ec1;
    color: white;
    border: none;
    border-radius: 7px;
    font-size: 1rem;
    cursor: pointer;
  }

  /* ! Modal */

  .modal {
    width: 36%;
    margin: 50px auto;
    height: 620px;
    background: #fff;
    text-align: justify;
  }

  .modal ul {
    margin: 0;
    padding: 0;
  }

  .flex_box {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0px 11px;
    border-bottom: 1px solid rgb(170, 166, 166);
    font-size: 15px;
    color: #505c66;
  }

  .flex_box > :first-child {
    color: #2a6ec1;
    font-size: 20px;
    cursor: pointer;
  }

  .flex_3 {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    padding: 20px 11px;
  }

  .flex_3 p {
    margin: 0;
    padding: 0;
    color: #505c66;
  }

  .flex_3 > div h4,
  h3 .flex_4 > div h3,
  h4 {
    margin: 0;
    padding: 0;
  }

  .flex_3 > :first-child {
    width: 24px;
    border-radius: 50%;
    background: #f0f3f5;
    padding: 10px;
  }

  .flex_4 {
    display: flex;
    align-items: center;
    gap: 80px;
    padding: 10px;
    justify-content: space-between;
    line-height: 20px;
    margin-bottom: 40px;
  }

  .flex_4 ul {
    margin-left: 15px;
    color: #505c66;
  }

  .flex_4 > :first-child {
    width: 50%;
    font-size: 14px;
  }

  .flex_4 > :last-child {
    display: flex;
    flex-direction: column;
    gap: -2px;
    width: 32%;
    text-align: right;
  }
`;

const Rooms = ({ room, hId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState(0);
  const totalPrice = room.roomPrice + price;

  const handleOpen = () => {
    // dispatch(paymentType(totalPrice));
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handlePricesInc = () => {
    setPrice(118);
  };
  const handlePricesDec = () => {
    setPrice(0);
  };
  const handlePaymentPage = () => {
    // history.push('/payment')
    navigate("/payment");
  };

  const handleOpenRoom = (id) => {
    // dispatch(paymentType(totalPrice));
    navigate(`/${hId}/${id}`);
  };

  const modal = (
    <Travel className="modal">
      <Box className="flex_box">
        <CloseIcon onClick={handleClose} />
        <p>Your payment options</p>
      </Box>
      <Box className="flex_3">
        <VerifiedUserIcon />
        <div>
          <h4>Fully refundable before Sat, Sep 11</h4>
          <p>
            You can change or cancel this stay if plans change. Because
            flexibility matters.
          </p>
        </div>
      </Box>
      <Box className="flex_4">
        <div>
          <h4>Pay now</h4>
          <ul>
            <li>We will process your payment in your local currency</li>
            <li>More ways to pay: use Debit/Credit card</li>
            <li>You can use a valid Travelocity coupon</li>
          </ul>
        </div>
        <div>
          <h3 style={{ margin: "0", padding: "0" }}>${room.roomPrice}</h3>
          <small>per night</small>
          <small style={{ fontWeight: "bold" }}>
            ${room.roomPrice + price} total
          </small>
          <small>included tax & fees</small>
          <button
            style={{ width: "100px", marginLeft: "71px" }}
            onClick={handlePaymentPage}
          >
            Pay now
          </button>
        </div>
      </Box>
      <Box className="flex_4">
        <div>
          <h4>Pay when you stay</h4>
          <ul>
            <li>You will not be charged until your stay</li>
            <li>Pay the property directly in their local currency</li>
          </ul>
        </div>
        <div>
          <h3 style={{ margin: "0", padding: "0" }}>${room.roomPrice}</h3>
          <small>per night</small>
          <small style={{ fontWeight: "bold" }}>
            ${room.roomPrice + price} total
          </small>
          <small>included tax & fees</small>
          <button
            style={{ width: "140px", marginLeft: "31px" }}
            onClick={handlePaymentPage}
          >
            Pay at property
          </button>
        </div>
      </Box>
    </Travel>
  );

  return (
    <div>
      <div className="room_div">
        <img
          src={room.images[0].url}
          alt=""
          onClick={() => handleOpenRoom(room.roomTypeId)}
        />
        <div className="room_details">
          <h3 style={{ fontSize: "17px", marginTop: "10px" }}>{room.name}</h3>
          <p style={{ marginTop: "10px" }}>4.7 / 5 guest room rating</p>
          <Box className="flex_1">
            <SquareFootIcon />
            <p>{Math.floor(Math.random() * 300 + 99)} Square fit</p>
          </Box>
          <Box className="flex_1">
            <LocationCityIcon />
            <p>City view</p>
          </Box>
          <Box className="flex_1">
            <GroupIcon />
            <p>Sleep 3</p>
          </Box>
          <Box className="flex_1">
            <HotelIcon />
            <p>2 Twin beds</p>
          </Box>
          <Box className="flex_1">
            <WifiIcon />
            <p>Free wifi</p>
          </Box>
          <Box className="flex_1">
            <FreeBreakfastIcon />
            <p>Breakfast buffet</p>
          </Box>
          <Box className="flex_1">
            <LocalParkingIcon />
            <p>free self parking</p>
          </Box>
          <Box className="flex_1">
            <DoneIcon />
            <p>Reserve now, pay deposit</p>
          </Box>
          <Box className="flex_1">
            <p className="green">Fully refundable</p>
            <span>
              <BiInfoCircle />
            </span>
          </Box>
          <small>Before sun, 5 sep</small>
          <Box className="flex_1">
            <p className="more" onClick={handleOpenRoom}>
              More details
            </p>
          </Box>
          <div className="line"></div>
          <div className="extra">
            <h4>Extras</h4>
            <RadioGroup aria-label="price" name="price_1">
              <Box className="flex_2">
                <FormControlLabel
                  value="noExtra"
                  control={<Radio color="primary" />}
                  label="One-way airport transfer"
                  onChange={handlePricesDec}
                />
                <p>+ $0</p>
              </Box>
              <Box className="flex_2">
                <FormControlLabel
                  value="halfBoard"
                  control={<Radio color="primary" />}
                  label="Half Board"
                  onChange={handlePricesInc}
                />
                <p>+ $118</p>
              </Box>
            </RadioGroup>
            <h3 className="h3_price">${room.roomPrice + price}</h3>
            <div className="flex_2">
              <div className="flex_small">
                <small>per night</small>
                <small style={{ fontWeight: "bold", marginBottom: "5px" }}>
                  ${room.roomPrice + price} total
                </small>
                <small>include tax & fees</small>
              </div>
              <button onClick={handleOpen}>Reserve</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {modal}
        </Modal>
      </div>
    </div>
  );
};

export default Rooms;
