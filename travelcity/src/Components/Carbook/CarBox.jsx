import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import {Link} from 'react-router-dom';
import {CircularProgress,InputLabel,MenuItem,FormControl,Select} from "@mui/material";
//import { Filter } from '../Filters/CarFilter';
import person from "./CarLogoImages/person.png";
import milege from "./CarLogoImages/milege.png";
import star from "./CarLogoImages/star.png";
import flight from "./CarLogoImages/flight.png";
import {useDispatch, useSelector} from "react-redux"
import { CarFetch, CarInputFilter, CarRefresh, CarTypeFilter } from './CarRedux/Car.action';


const Wraper = styled.div`
   gap:20px;
   width:100%;
   .progress{
    width:20%;
    margin:200px auto;
    display:flex;
    flex-direction:column;
    align-items:center;
   }

   .progress>img{
    margin-bottom:10px;
    width:100px;
   }

   @media (max-width:800px){
    .btn{
        align-items:center;
    }
   }
`
const CarDiv = styled.div`
  display:flex;
  width:100%;
  justify-content : space-between;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius : 8px;
  margin-bottom : 20px;
  background-color : white;
 @media(max-width:800px){
    width:100%;
    .greatdeal{
        line-heigth:0.6;
        color:#333333;
        font-size :12px;
        width:"20%";
    }
    .non-refund{
        display:none;
    }
    .price{
        line-height: 0.1;
        margin-right: 15px
    }
    FormControl{
        display : none; 
    }
    .div1{
        width:"25%"
    }
 }
 .div1{
    width:"20%"
}

 .greatdeal{
    line-heigth:0.6;
    color:#333333;
    width:"20%"
    margin-bottom:"5px"
 }
 .non-refund{
    line-height: 0.6;
    margin-top : 38px;
    margin-left : -50px
 }
 .price{
    line-height: 0.5;
    margin-right: 15px
}
.imge-div {
    display : flex
   }

.imge-div img{
 width : 20px;
 height : 19px;
 margin-top: 4px;
 margin-right : 5px
}

.imge-div p{
line-height: 0.8;
margin-bottom : -5px;
font-size:11px;
}
`
const SortDiv = styled.div`
display : flex;
justify-content : space-between;
@media (max-width: 600px) {
    flex-direction: column;
    justify-content : center;
    width :80%;
}
.totalCars{
    line-height: 0.4;
}
`
const Button = styled.button`
 background-color : #2A6EC1;
height : 36px;
width : 91px ;
border : none;
border-radius : 5px;
color : white;
cursor: pointer;
@media (max-width: 600px) {
    height : 25px;
width : 70px ;
font-size : 12px
}
 `
 const Button1 = styled.button`
 background-color : white;
 height : 36px;
 width : 114px ;
 border : 0.5px solid gray;
 border-radius : 5px;
 color : #0D5ab9;
 cursor: pointer;
margin : auto
 `

export const CarBox=()=>{
    let CopyData = []
    const [sortValue,setSortValue] = useState("");
    const {Cardata,error,loading,TypeFilter,InputFilter,InputStatus,TypeStatus} = useSelector((state)=>state.Car);
    const[input2,setInput2]=useState(InputFilter);
    const dispatch = useDispatch()
    useEffect(()=>{
           dispatch(CarFetch())
    },[])
    CopyData = Cardata;
    if(TypeStatus){
        CopyData = Cardata.filter(ele=>ele.car_type===TypeFilter);
      }
    if(InputStatus){

        CopyData = Cardata.filter(ele=>ele.car_name.includes(InputFilter,0));
    }
 
    const handleChange=(e)=>{
        setSortValue(e.target.value)
        if(e.target.value==="High to Low"){
            let copyData = Cardata.sort((a,b)=>b.price-a.price)
            CopyData=copyData
        }
        if(e.target.value==="Refresh" || e.target.value===""){
            dispatch(CarFetch())
            CopyData=Cardata
        }
      if(e.target.value==="Low to High"){
        let copyData = Cardata.sort((a,b)=>a.price-b.price)
        CopyData=copyData
      }
    }
    const handleShowMore =()=>{
        dispatch(CarRefresh())
        CopyData=Cardata
    }
   if(loading){
     return(<div className='progress'>
     <img src='https://raw.githubusercontent.com/Prashant-Bhatiya/Travelocity-clone/ad148d0be04ab12faeef4705dbb701ffd3a914e9/src/logo.svg' alt='logo'/>
     <CircularProgress/>
   </div>)
   }
   if(error){
    <div>Something Went Wrong</div>
   } 
    return (
         <div style={{width:"100%"}}>
            <Wraper>
                <SortDiv>
                    <div className='totalCars'>
                        <p>{CopyData.length}  Cars • Total</p>
                        <p style={{fontSize:"10px",lineHeight:"10px"}}>Learn more about our Great Deals</p>
                    </div>
                    <FormControl sx={{m:1,minWidth:288}} size="small" style={{backgroundColor:"white"}}>
                      <InputLabel id="demo-select-small">Sort</InputLabel>
                       <Select labelId='demo-select-small' id="demo-select-small" value={sortValue} label="Age" onChange={(e)=>handleChange(e)}>
                          <MenuItem value="">Sorting</MenuItem>
                          <MenuItem value="Refresh">ReFresh</MenuItem>
                          <MenuItem value="Low to High">Low to High</MenuItem>
                          <MenuItem value="High to Low">High to Low</MenuItem>
                       </Select>
                    </FormControl>
                </SortDiv>
                {
                    CopyData.map((data)=>
                    <CarDiv key={data.id}>
                        <div  className="div1">
                        <img src={data.url} alt="" width ="100%" height="70px" style={{ marginTop: "80px" }} />
                        </div>

                        <div className='greatdeal'>
                          <button style={{heigth:"24px",width:"74px",backgroundColor:"#1f7d57", fontSize: "12px", color: "white", borderRadius: "3px", border: "none", marginTop: "10px" }}>Great Deal</button>
                          <h3>{data.car_type}</h3>
                          <p >{data.car_name}</p>

                                <div className='imge-div'>
                                    <img src={person} alt="" />  <p style={{lineHeight:"3px"}}> 4 Automatic</p>
                                </div>
                                <div className='imge-div'>
                                    <img src={milege} alt="" /> <p> Unlimited mileage</p>
                                </div>
                                <div className='imge-div'>
                                    <img src={star} alt="" /><p >Enhanced cleaning</p>
                                </div>
                                <div className='imge-div' style={{paddingBottom:"10px"}}>
                                    <img src={flight} alt="" /><p>Counter in terminal, shuttle to car</p>
                                </div>
                        </div>

                        <div className='non-refund'>
                                <p style={{ color: '#505c66', fontSize: "15px", marginLeft: "-5px" }}>Non-refundable</p>
                                <p style={{ color: '#1f7d57', fontSize: "15px", marginLeft: "-5px" }}>Pay now and save</p>


                                <div style={{ display: "flex", marginTop: "-5px", marginLeft: "-5px" }}>
                                    <img src={data.img_url} alt="" style={{ marginTop: "10px", height: "16px" }} /><p style={{ color: '#505c66', fontSize: "14px" }}>73% recommend</p>
                                </div>

                            </div>
                        <div className='price'>
                                <h3 style={{ color: "#505c66" }}>${data.price}</h3>
                                <p>per day </p>

                               <Link to={`/carreserve/${data.id}`}><Button>Reserve</Button></Link> 
                         </div>
                    </CarDiv>)
                }

                <div style={{width:"100%",marginBottom:"30px",marginTop:"20px"}} className="btn">
                   <Button1 onClick={handleShowMore} style={{justifyContent:"center"}}>Show More</Button1>
                </div>
                <img src="https://tpc.googlesyndication.com/simgad/6177323794858097722?" width="100%" alt="banner" style={{marginLeft:"20px"}} className="ad-img"/>
            </Wraper>
         </div>
    )
}
