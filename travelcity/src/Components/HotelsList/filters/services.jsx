import { FormControl, FormControlLabel, Radio } from "@material-ui/core";
import React from "react";
import { useState } from "react";

import styled from "styled-components";
const Travel = styled.div`
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

const Services = () => {
  const [loca, setLoca] = useState("");
  const handleChange = (e) => {
    setLoca(e.target.value);
  };
  return (
    <Travel>
      <div className="filter-title">Services</div>

      <div className="popular-filter">
        <FormControl as="fieldset">
          <RadioGroup
            aria-label="location"
            name="location"
            value={loca}
            onChange={handleChange}
          >
            <FormControlLabel
              color="primary"
              value="Swimming pool"
              control={<Radio color="primary" />}
              label="Swimming pool"
            />
            <FormControlLabel
              value="Pets Allowed"
              control={<Radio color="primary" />}
              label="Pets Allowed"
            />
            <FormControlLabel
              value="Free WiFi"
              control={<Radio color="primary" />}
              label="Free WiFi"
            />
            <FormControlLabel
              value="Parking"
              control={<Radio color="primary" />}
              label="Parking"
            />
            <FormControlLabel
              value="Restaurant"
              control={<Radio color="primary" />}
              label="Restaurant"
            />
          </RadioGroup>
        </FormControl>
      </div>
    </Travel>
  );
};

export default Services;
