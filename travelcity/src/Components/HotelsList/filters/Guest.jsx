import React from "react";
import { useState } from "react";
import {
  FormControl,
  Radio,
  FormControlLabel,
  RadioGroup,
} from "@material-ui/core";

import "../Main.css";
import styled from "styled-components";

const Travel = styled.div`
  .filter-title {
    font-size: 1rem;
    font-weight: 700;
    margin: 1.5rem 0;
  }
  .customer-rating {
    display: flex;
    flex-direction: column;
    color: #505c66;
  }
`;

const Guest = () => {
  const [guest, setGuest] = useState("");
  const handleChange = (event) => {
    setGuest(event.target.value);
  };

  return (
    <Travel>
      <div className="filter-title">Customer Rating</div>
      <div className="customer-rating">
        <FormControl as="fieldset">
          <RadioGroup
            aria-label="guest-rating"
            name="guest-rating"
            value={guestRating}
            onChange={handleChange}
          >
            <FormControlLabel
              color="primary"
              value="any"
              control={<Radio color="primary" />}
              label="Any"
            />
            <FormControlLabel
              value="Superb 4.5+"
              control={<Radio color="primary" />}
              label="Superb 4.5+"
            />
            <FormControlLabel
              value="Very good 4+"
              control={<Radio color="primary" />}
              label="Very good 4+"
            />
            <FormControlLabel
              value="Good 3.5+"
              control={<Radio color="primary" />}
              label="Good 3.5+"
            />
          </RadioGroup>
        </FormControl>
      </div>
    </Travel>
  );
};

export default Guest;
