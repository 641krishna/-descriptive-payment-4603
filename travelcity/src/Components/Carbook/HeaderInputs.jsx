import  React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { CarInputFilter } from './CarRedux/Car.action';

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
    width:80%;
    margin:auto;
    gap:20px;
    margin-top:30px;
 }
`

const Button = styled.button`
background-color : #2A6EC1;
height : 52px;
width : "2130px" ;
border : none;
border-radius : 5px;
color : white;
cursor: pointer;
font-size : 18px;
`
export const HeaderInputs=()=>{
   const dispatch = useDispatch()
  const [input1,setInput]=useState("Delhi")

  const handleInput=(e)=>{
    setInput(e.target.value);
  }
  return (
    <div style={{width:"100%",margin:"auto"}}>
  <Date>
    <div className='date-pick'>
        <Stack component="form" noValidate spacing={3} >
   
      <TextField
        id="date"
        label="City"
        
        type="text" 
        value={input1} onChange={handleInput}
        sx={{ width: "100%" }}
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
        sx={{ width: "100%" }}
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
        sx={{ width: "100" }}
        InputLabelProps={{
          shrink: true,
        }}
        
      />

        </Stack>
        <button onClick={()=> dispatch(CarInputFilter(input1))} style={{backgroundColor:"#2A6EC1",height:"52px",width:"20%",border:"none",borderRadius:"5px",color:"white",cursor:"pointer",fontSize:"18px"}}>Search</button>
    </div>
  </Date>
    </div>
  )
}