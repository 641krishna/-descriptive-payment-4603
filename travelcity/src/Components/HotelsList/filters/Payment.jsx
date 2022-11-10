import React from 'react'
import { FormControlLabel, Checkbox } from "@material-ui/core";

import styled from 'styled-components';

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

const Payment = () => {
  return (
    <Travel>
        <div className="filter-title">
            Payment Method
        </div>
        <div className="popular-filter">
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="100% refundable"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Pay during the stay"
          labelPlacement="end"
        />
        </div>
    </Travel>
  )
}

export default Payment