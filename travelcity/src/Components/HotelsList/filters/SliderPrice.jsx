import { Slider } from "@material-ui/core";
import React, { useState } from "react";

import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";

import styled from "styled-components";
const Travel = styled.div`
  .filter-title {
    font-size: 1rem;
    font-weight: 700;
    margin: 1.5rem 0;
  }
`;
const SliderPrice = () => {
  const [popular, setPopular] = useState("");
  const handleChange = (e) => {
    setPopular(e.target.value);
  };
  return (
    <Travel>
      <div className="filter-title">Price per night</div>

      <RangeSlider
        value={value}
        onChange={handleChange}
        aria-label={["min", "max"]}
        defaultValue={[10, 30]}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
      
      {/* <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      /> */}
    </Travel>
  );
};

export default SliderPrice;
