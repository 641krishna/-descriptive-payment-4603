import styled from '@emotion/styled'
import React from 'react'
import { Filter } from './Filters/CarFilter'
import { HeaderInputs } from './HeaderInputs'
import { CarAds } from './CarAds';
import { CarBox } from './CarBox';
import BarcodeSection from "./CarLogoImages/Barcodesection.png"

const CarStyles=styled.div`
  display:flex;
  width:90%;
  margin:auto;
  justify-content:space-between;

  #left{
    @media (max-width: 600px) {
      
    }

    #right{
        @media (max-width: 600px) {
          display:none
        }
    }
`
export const Carbook=()=>{
    return(
        <div style={{backgroundColor:"#F5F5F5",width:"100%",margin:"auto"}}>
            <HeaderInputs/>
            <CarStyles>
                  <div id="left" style={{width:"20%"}}>
                        <iframe style={{border:"1px solid gray",marginTop:"8px"}} width="100%" height="150" src={`https://maps.google.com/maps?q=Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed`}>
                  
                        </iframe>
                        <Filter/>
                  </div>
                <div className='mid' style={{width:"60%"}}>
                    <CarBox/>
                </div>
                <div className='right'>
                     <CarAds/>
                </div>
            </CarStyles>
            <div className='BarcodeSection'>
            <p>The makes/models shown are examples only. We are unable to guarantee a specific make/model. Actual makes/models are subject to availability and vary by rental car company</p>
            <img src={BarcodeSection} alt="" />
            </div>
        </div>
    )
}