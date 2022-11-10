import React, { useState } from "react";

import {
  SliderFilledTrack,
  SliderTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";

import styled from "styled-components";
import { Slider } from "@material-ui/core";
const Travel = styled.div`
  .filter-title {
    font-size: 1rem;
    font-weight: 700;
    margin: 1.5rem 0;
  }
`;
const SliderPrice = () => {
  const [sliderValue, setSliderValue] = useState(10);

  const [popular, setPopular] = useState("");
  const handleChange = (e) => {
    setPopular(e.target.value);
  };
  return (
    <Travel>
      <div className="filter-title">Price per night</div>

      <div>
        <Slider
          aria-label="slider-ex-1"
          onChange={(v) => setSliderValue(v)}
          defaultValue={20}
        >
          <SliderMark value={0} fontSize="sm">
            $0
          </SliderMark>
          <SliderMark value={300} fontSize="sm">
            $300+
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </div>
    </Travel>
  );
};

export default SliderPrice;
