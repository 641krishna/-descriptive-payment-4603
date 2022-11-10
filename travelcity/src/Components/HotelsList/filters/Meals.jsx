import React from "react";
import {
  FormGroup,
  FormControl,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";

import "../Main.css";
import styled from "styled-components";

const Travel = styled.div`
  .filter-title {
    font-size: 1rem;
    font-weight: 700;
    margin: 1.5rem 0;
  }
  .meals {
    display: flex;
    flex-direction: column;
    color: #505c66;
  }
`;

const Meals = () => {
  return (
    <Travel>
      <div className="filter-title">Food Plans</div>
      <div className="meals">
        <FormControl as="fieldset">
          <FormGroup>
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="Breakfast included"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="Lunch included"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="Dinner included"
              labelPlacement="end"
            />
          </FormGroup>
        </FormControl>
      </div>
    </Travel>
  );
};

export default Meals;
