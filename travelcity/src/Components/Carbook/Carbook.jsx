import styled from '@emotion/styled'
import React from 'react'
import { Filter } from './Filters/CarFilter'
import { HeaderInputs } from './HeaderInputs'
import { CarAds } from './CarAds';
import { CarBox } from './CarBox';
import BarcodeSection from "./CarLogoImages/Barcodesection.png"

const CarStyles=styled.div`
  display:flex;
  width:100%;
  margin:auto;
  justify-content:space-around;
 @media(max-width:800px){
  justify-content:space-between;
 }
  #left{
    @media (max-width: 800px) {
      display:none
    }
    }
  .mid{
    width:"60%;
  }
  .mid{
    width:"70";
  }
  .filter{
    width:"20%";
  }
`

export const Carbook=()=>{
    return(
        <div style={{backgroundColor:"#F5F5F5",width:"95%",margin:"auto"}}>
            <HeaderInputs/>
            <CarStyles>
                   <div className='filter'>
                        <iframe style={{border:"1px solid gray",marginTop:"8px"}} width="90%" height="150" src={`https://maps.google.com/maps?q=Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed`}>
                        </iframe>
                        <Filter/>
                  </div>
                <div className='mid' style={{width:"60%"}}>
                    <CarBox/>
                </div>
                <div id='left' style={{width:"10%"}}>
                     <CarAds/>
                </div> 
            </CarStyles>
            <div style={{width:"100%",margin:"auto"}}>
            <p>The makes/models shown are examples only. We are unable to guarantee a specific make/model. Actual makes/models are subject to availability and vary by rental car company</p>
            <img src={BarcodeSection} width="100%" alt="" />
            </div>
        </div>
    )
}