import styled from "styled-components";
import { TextField, Divider, makeStyles } from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles({
  input: {
     background: "white",
  },
  // inputlabel:{
  //   background: "white",
  //   display : "flex",
  //   justifyContent : "center",
  // }
});

const Wrapper = styled.div`
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

export const SearchByProperty = ({ handleQueryChange, query }) => {
  const classes = useStyles();
  return (
    <Wrapper>
      <h4 className="search-title">Search by property name</h4>
      <TextField
        className={classes.input}
        id="outlined-basic"
        //  label= {<p className={classes.inputlabel}> <SearchIcon/> Hotel Name</p>}
        label = "Hotel Name"
        variant="outlined"
        color="primary"
        value={query}
        onChange={(e) => {handleQueryChange(e.target.value)}}
      />
      <Divider className="divider" />
      <div className="search-title">Filter by</div>
    </Wrapper>
  );
};
