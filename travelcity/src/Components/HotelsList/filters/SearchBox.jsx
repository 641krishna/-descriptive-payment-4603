import { Divider, makeStyles, TextField } from "@material-ui/core";
import React from "react";

import styled from "styled-components";

const useStyling = makeStyles({
  input: {
    background: "white",
  },
});
const Travel = styled.div`
  .search-title {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  .divider {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;
const SearchBox = ({ handQuery, query }) => {
  const small = useStyling();

  return (
    <Travel>
      <h4 className="search-title">Search by property name</h4>
      <TextField
        className={small.input}
        id="outlined-basic"
        label="Hotel Name"
        variant="outlined"
        color="primary"
        value={query}
        onChange={(e) => {
          handQuery(e.target.value);
        }}
      />
      <Divider className="divider" />
      <div className="search-title">Filter by</div>
    </Travel>
  );
};

export default SearchBox;
