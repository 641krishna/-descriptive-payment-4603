import React from 'react'
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material"
import styled from '@emotion/styled'

const Form = styled(FormControlLabel)`
 font-size:10px;
`
const Wraper = styled.div`
 display:flex;

 .fromgroup{
    color: #505c66;
    font-size:2px;
 }

 .p-tag{
    line-height:1.9;
    margin-top:32px;
    margin-left:80px;
    color:#505c66
 }
 
 .FormControlLabel{
    font-size:5px;
 }
 .h4-tag{
    margin-left:80px;
 }
`
const Wraper1 = styled.div`
  display:flex;
  justify-content:space-between;

  p{
    color: #505c66
  }
`
export const Filter=()=>{
    const[economy,setEconomy]=React.useState("");
    const handleChange=(e)=>{
        setEconomy(e.target.value)
    }

   return(
    <div style={{width:"100%"}} >
        <h3>Filter by</h3>
            <Wraper>
                 <div>
                     <h4>Car Type</h4>
                     <FormGroup className='fromgroup' name="search" value={economy} onChange={(e)=>handleChange(e)}>
                     <Form control={<Checkbox />} label="Economy (12)" value="economy" style={{fontSize:"5px"}}/>
                        <FormControlLabel control={<Checkbox />} label="Compact (12)" />
                        <FormControlLabel control={<Checkbox />} label="Midsize (13)" />
                        <FormControlLabel control={<Checkbox />} label="Standard (12)" />
                        <FormControlLabel control={<Checkbox />} label="Full-size (18)" />
                        <FormControlLabel control={<Checkbox />} label="Premium (22)" />
                        <FormControlLabel control={<Checkbox />} label="Luxury (10)" />
                        <FormControlLabel control={<Checkbox />} label="Convertible (2)" />
                        <FormControlLabel control={<Checkbox />} label="Minivan (10)" />
                        <FormControlLabel control={<Checkbox />} label="SUV (50)" />
                        <FormControlLabel control={<Checkbox />} label="Pickup (16)" />
                        <FormControlLabel control={<Checkbox />} label="Sports Car (6" />
                        <FormControlLabel control={<Checkbox />} label="Other (24)" />
                     </FormGroup>
                 </div>
                 <div>
                    <h4 className='h4-tag'>From</h4>
                    <div className='p-tag'>
                        <p>$50</p>
                        <p>$42</p>
                        <p>$60</p>
                        <p>$30</p>
                        <p>$65</p>
                        <p>$100</p>
                        <p>$120</p>
                        <p>$145</p>
                        <p>$135</p>
                        <p>$107</p>
                        <p>$200</p>
                        <p>$921</p>
                        <p>$205</p>
                    </div>
                 </div>
            </Wraper>
            <Wraper1>
                <FormGroup>
                    <h4>Capacity</h4>
                    <FormControlLabel control={<Checkbox/>}label="2-5 passengers (30)"/>
                    <FormControlLabel control={<Checkbox/>} label="above 5 passengers (6)"/>
                </FormGroup>
                <div>
                    <div className='p-tag'>
                        <h4>From</h4>
                        <p style={{marginTop:"25px",lineHeight:"1.6"}}>$59</p>
                        <p>$60</p>
                    </div>
                </div>
            </Wraper1>
            <Wraper1>
               <FormGroup>
                 <h4>Cancellation policy</h4>
               <FormControlLabel control={<Checkbox />} label="Free cancellation (139)" />
               </FormGroup>
                <div>
                    <div className='p-tag'>
                      <h4>From</h4>
                        <p style={{ marginTop: "25px", lineHeight: "1.6" }}>$59</p>

                    </div>
              </div>
           </Wraper1>
            <Wraper1>
            <FormGroup>
            <h4>Save time during pick-up</h4>
            <FormControlLabel control={<Checkbox />} label="Online check-in (78)" />
            </FormGroup>
             <div>
                <div className='p-tag'>
                   <h4 style={{ marginLeft: "0px" }}>From</h4>
                        <p style={{ marginTop: "20px", lineHeight: "1.6" }}>$59</p>

                </div>
            </div>
            </Wraper1>
            <Wraper1>
             <FormGroup>
               <h4>Customer recommendation</h4>
               <FormControlLabel control={<Checkbox />} label="70% & up (31)" />
               <FormControlLabel control={<Checkbox />} label="40% & up (199)" />
             </FormGroup>
            <div>
             <div className='p-tag'>
             <h4>From</h4>
             <p style={{ marginTop: "30px", lineHeight: "1.6" }}>$78</p>
             <p>$59</p>
             </div>
            </div>
            </Wraper1>
            <Wraper1>
            <FormGroup>
                <h4>Payment option</h4>
                  <FormControlLabel control={<Checkbox />} label="Pay now (60)" />
                    <FormControlLabel control={<Checkbox />} label="Pay later (139)" />
            </FormGroup>
            <div>
             <div className='p-tag'>
              <h4>From</h4>
              <p style={{ marginTop: "30px", lineHeight: "1.6" }}>$62</p>
             <p>$59</p>
           </div>
</div>
           </Wraper1>
    </div>
   )
}