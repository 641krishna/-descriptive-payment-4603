import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
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

const Popular = () => {
  const [popular, setPopular] = useState("");
  const handleChange = (e) => {
    setPopular(e.target.value);
  };
  return (
    <Travel>
      <div className="filter-title">Popular Attractions</div>
      <div className="popular-filter">
        <FormControl as="fieldset">
          <FormGroup
            aria-label="guest-rating"
            name="guest-rating"
            value={popular}
            onChange={handleChange}
          >
            <FormControlLabel
              value="port"
              control={<Checkbox color="primary" />}
              label="Port of Genoa Cruise Terminal"
              labelPlacement="end"
            />
            <FormControlLabel
              value="ocean-view"
              control={<Checkbox color="primary" />}
              label="Ocean view"
              labelPlacement="end"
            />
            <FormControlLabel
              value="hotel-resort"
              control={<Checkbox color="primary" />}
              label="Hotel resort"
              labelPlacement="end"
            />
            <FormControlLabel
              value="genoa"
              control={<Checkbox color="primary" />}
              label="Aquarium of Genoa"
              labelPlacement="end"
            />
            <FormControlLabel
              value="antico"
              control={<Checkbox color="primary" />}
              label="Porto Antico"
              labelPlacement="end"
            />
          </FormGroup>
        </FormControl>
      </div>
    </Travel>
  );
};

export default Popular;
