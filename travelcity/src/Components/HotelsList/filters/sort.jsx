import { Box } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const Travel = styled.div`
.menuDrop {
    cursor:pointer
    align-items: center;
  }`;

const Sort = () => {
  return (
    <Travel className="menuDrop">
      <Box className="selectMenu">
        <select name="Sort By" className="selectmenu">
          <option value="option1">Recommended</option>
          <option value="option2">Price</option>
          <option value="option3">Distance from airport</option>
          <option value="option3">Price & Our highlights</option>
          <option value="option3">Star Category</option>
        </select>
      </Box>
    </Travel>
  );
};

export default Sort;
