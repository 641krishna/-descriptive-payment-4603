import React from 'react'
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material"
import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import { CarTypeFilter } from '../CarRedux/Car.action'

const Form = styled(FormControlLabel)`
 font-size:10px;
`
const Wraper = styled.div`
 display:flex;
 width:"100%"
 
 @media (max-width: 600px) {
  justify-item:space-around;
}
 .fromgroup{
    color: #505c66;
    font-size:2px;
 }

 .p-tag{
    line-height:1.6;
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
  width:"100%";
  justify-content:space-between;

  p{
    color: #505c66
  }
  .p-tag{
    line-height:1.6;
    margin-top:32px;
    margin-left:80px;
    color:#505c66
 }
`
export const Filter=()=>{
    const[economy,setEconomy]=React.useState("");
    const dispatch = useDispatch()
    const handleChange=(e)=>{
         setEconomy(e.target.value);
         dispatch(CarTypeFilter(e.target.value))
    }

   return(
    <div style={{width:"90%"}} >
        <h3>Filter by</h3>
            <Wraper1>
                 <div>
                     <h4>Car Type</h4>
                     <FormGroup className='fromgroup' name="search" value={economy} onChange={(e)=>handleChange(e)}>
                      <Form control={<Checkbox />} label="Economy" value="Economy" style={{fontSize:"5px"}}/>
                        <FormControlLabel control={<Checkbox />} label="Compact" value="Compact" />
                        <FormControlLabel control={<Checkbox />} label="Midsize" value="Midsize"/>
                        <FormControlLabel control={<Checkbox />} label="Standard" value="Standard" />
                        <FormControlLabel control={<Checkbox />} label="Full-size" value="Full-size"/>
                        <FormControlLabel control={<Checkbox />} label="Premium" value="Premium"/>
                        <FormControlLabel control={<Checkbox />} label="Luxury" value="Luxury"/>
                        <FormControlLabel control={<Checkbox />} label="Convertible" value="Convertible"/>
                        <FormControlLabel control={<Checkbox />} label="Minivan" value="Minivan" />
                        <FormControlLabel control={<Checkbox />} label="SUV" value="SUV"/>
                        <FormControlLabel control={<Checkbox />} label="Pickup" value="Pickup"/>
                        <FormControlLabel control={<Checkbox />} label="Sports" value="Sports" />
                        <FormControlLabel control={<Checkbox />} label="Other" value="Other"/>
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
            </Wraper1>
            <Wraper1>
                <FormGroup>
                    <h4>Capacity</h4>
                    <FormControlLabel control={<Checkbox/>}label="2-5 passengers"/>
                    <FormControlLabel control={<Checkbox/>} label="above 5 passengers"/>
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
               <FormControlLabel control={<Checkbox />} label="Free cancellation" />
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
            <FormControlLabel control={<Checkbox />} label="Online check-in" />
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
                  <FormControlLabel control={<Checkbox />} label="Pay now " />
                    <FormControlLabel control={<Checkbox />} label="Pay later " />
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