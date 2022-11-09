import  React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';

const Date = styled.div`
 width:100%;
 background-color:white;
 height:100px;
 margin:0;
 padding:10px;

 Stack{
    display:flex;
 }

 .date-pick{
    display:flex;
    width:70%;
    margin:auto;
    gap:20px;
    margin-top:30px;
 }
`

const Button = styled.button`
background-color : #2A6EC1;
height : 52px;
width : 130px ;
border : none;
border-radius : 5px;
color : white;
cursor: pointer;
font-size : 18px;
`
export const HeaderInputs=()=>{
    const item = JSON.parse(localStorage.getItem("inputsData"))
  return (
    <div>

  <Date>
    <div className='date-pick'>
        <Stack component="form" noValidate spacing={3} >
   
      <TextField
        id="date"
        label="City"
        
        type="text" 
        value={"kirti"}
        sx={{ width: 350 }}
        InputLabelProps={{
          shrink: true,
        }}
       
      />

        </Stack>
        <Stack component="form" noValidate spacing={3} >

      <TextField
        id="date"
        label="Date"
        type="text"
        defaultValue={"09-11-22"}
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
        
      />
        </Stack>
        <Stack component="form" noValidate spacing={3} >
      <TextField
        id="date"
        label="Date"
        type="text"
        defaultValue={"11-11-22"
        }
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
        
      />

        </Stack>
        <Button>Search</Button>
    </div>

  </Date>
    </div>
  )
}