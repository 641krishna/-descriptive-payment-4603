import React from "react";
import TextField from "@mui/material/TextField"
import Stack from "@mui/material/Stack"
import styled from 'styled-components';
export const HeaderInputs=()=>{

    const Button = styled.button`
    background-color:#2A6EC1;
    heigth:52px;
    width:130px;
    border:none;
    border-radius:5px;
    color:white;
    cursor:pointer;
    font-size:18px;
    `
    return (
    <div>
 
        <div>
           <Stack component="form" noValidate spacing={3}>
                <TextField id="date" label="City" type="text" defaultValue={"📍"} value="Goa" sx={{width:350}} InputLabelProps={{shrink:true}}/>
           </Stack>
           <Stack component="form" noValidate spacing={3}>
                <TextField id="date" label="Date" type="text" defaultValue={"20.10.22"}  sx={{width:220}} InputLabelProps={{shrink:true}}/>
           </Stack>
           <Stack component="form" noValidate spacing={3}>
                <TextField id="date" label="Date" type="text" defaultValue={"30.10.23"}  sx={{width:220}} InputLabelProps={{shrink:true}}/>
           </Stack>
           <Button>Search</Button>
        </div>
    </div>
    )
}