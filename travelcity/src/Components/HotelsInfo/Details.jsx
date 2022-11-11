import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import "./Main2.css";
import Rooms from "./Rooms";
import Review from "./Review";
import About from "./About";

const Details = ({data, id }) => {
  console.log(data)
  
  const images = data;


  const options = [
    { title: "Overview", to: "#" },
    { title: "Rooms", to: "#rooms" },
    { title: "Reviews", to: "#reviews" },
  ];

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const modal = (
    <div className="modal">
      <CloseIcon className="close" onClick={handleClose} />
      <FaChevronLeft className="left_arrow" onClick={prevSlide} />
      <FaChevronRight className="right_arrow" onClick={nextSlide} />
      <div className="modal_img">
        {images?.map((slide, index) => {
          return (
            <div key={index}>
              {index === current && <img src={slide.url} alt="hotelImages" />}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      <div className="flex" onClick={handleOpen} style={{ cursor: "pointer" }}>
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

      {/* <div
        className="flex"
        style={{ background: "#FFF", borderRadius: "0 0 10px 10px" }}
      >
        <div className="left_1" id="overview">
          <HotelOverview data={data} />
        </div>
        <div className="right_1">
          {/* <HotelMap data={data} /> */}
        {/* </div>
      </div> */} 

      <div className="room_grid" id="rooms">
        {data.roomTypes.map((room) => (
          <Rooms key={room.roomTypeId} room={room} hId={id} />
        ))}
      </div>

      <div id="location">
        <About />
      </div>
      {/* <div id="amenities">
        <Amenities />
      </div>
      <div id="policies">
        <Policies />
      </div> */}
      <div id="reviews">
        <Review />
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {modal}
      </Modal>
    </>
  );
};

export default Details;
