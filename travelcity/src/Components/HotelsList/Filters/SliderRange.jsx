
import Slider from '@mui/material/Slider';
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
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
`;

export const SliderRange = () => {
    const [popular, setPopular] = useState("");
    const handleChange = (event) => {
        setPopular(event.target.value);
    };

    return (
        <Wrapper>
            <div className="filter-title">Price per night</div>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                // value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                // getAriaValueText={valuetext}
            />

        </Wrapper>
    );
};