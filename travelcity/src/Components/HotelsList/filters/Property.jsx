import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import React from "react";

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

const Property = () => {
  return (
    <Travel>
      <div  className="filter-title">Property Type</div>
      <div className="popular-filter">
        <FormControl as="fieldset">
          <FormGroup>
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="Hotel resort"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="Hotel"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="All-inclusive resort"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="Bed and breakfast"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="Inn"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="Motel"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="Resort Hotel"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="Resort Hotel"
              labelPlacement="end"
            />
          </FormGroup>
        </FormControl>
      </div>
    </Travel>
  );
};

export default Property;
