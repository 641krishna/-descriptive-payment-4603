import React, { useEffect, useState } from 'react'
import axios from "axios"
import styled from '@emotion/styled'
import {Link} from 'react-router-dom';
import {CircularProgress,InputLabel,MenuItem,FormControl,Select} from "@mui/material";
//import { Filter } from '../Filters/CarFilter';
import person from "./CarLogoImages/person.png";
import milege from "./CarLogoImages/milege.png";
import star from "./CarLogoImages/star.png";
import flight from "./CarLogoImages/flight.png";


const Wraper = styled.div`
   gap:20px;
   
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

   @media (max-width:600px){
    .btn{
        align-items:center;
    }
    .ad-img{
        display:none;
    }
   }
`
const CarDiv = styled.div`
  display:flex;
  width:100%;
  justify-content : space-between;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius : 8px;
  margin-bottom : 10px;
  background-color : white;

 @media(max-width:600px){
    width:100vw;

    .greatdeal{
        line-heigth:1.6;
        color:#333333;
        font-size : 12px
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
 }

 .greatdeal{
    line-heigth:0.6;
    color:#333333
 }
 .non-refund{
    line-height: 0.6;
    margin-top : 50px;
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
 height : 21px;
 margin-top: 8px;
 margin-right : 5px
    }

.imge-div p{
line-height: 0.5;
margin-bottom : -1px;
font-size:14px;
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
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState(false);
    const [carData, setCarData] = useState([]);
    const [sortValue,setSortValue] = useState("") 
    const [page,setPage] = useState(1)
    
    useEffect(()=>{
            getData()
    },[page])

    const getData=async()=>{
        setLoading(true);
        try{
            let response = await axios.get(`https://carapi20.herokuapp.com/Car?_page=${page}&_limit=5`);
            const data = response.data;
            setCarData(data);
        }
        catch(err){
            setError(true)
        }
        finally{
            setLoading(false)
        }
    }
    console.log(carData)

    const handleChange=(e)=>{
        setSortValue(e.target.value)
        carData.sort((a,b)=>a.price-b.price)
    }

    const handleShowMore = async()=>{
        setLoading(true)
        try{
            let response = await axios.get(`https://fake-product.herokuapp.com/car`);
            const data = response.data;
            data = data.car;
            setCarData(data);
        }
        catch(err){
            setError(true)
        }
        finally{
            setLoading(false)
        }
    }

    const handleReserve = (id) => {
        // console.log(id)
    }

    return (
         <div>
            <Wraper>
                <SortDiv>
                    <div className='totalCars'>
                        <p>{carData.length}  Cars • Total includes taxes and fees</p>
                        <p style={{fontSize:"12px"}}>Learn more about our Great Deals</p>
                    </div>
                    <FormControl sx={{m:1,minWidth:288}} size="small" style={{backgroundColor:"white"}}>
                      <InputLabel id="demo-select-small">Sort</InputLabel>
                       <Select labelId='demo-select-small' id="demo-select-small" value={sortValue} label="Age" onChange={(e)=>handleChange(e)}>
                          <MenuItem value=""></MenuItem>
                          <MenuItem value={10}>Total Price</MenuItem>
                          <MenuItem value={20}>Customer Rating</MenuItem>
                          <MenuItem value={30}>Recommended</MenuItem>
                       </Select>
                    </FormControl>
                </SortDiv>
                {
                    loading?<div className='progress'>
                      <img src='https://raw.githubusercontent.com/Prashant-Bhatiya/Travelocity-clone/ad148d0be04ab12faeef4705dbb701ffd3a914e9/src/logo.svg' alt='logo'/>
                      <CircularProgress/>
                    </div>:error?<div>Something Went Wrong</div>:carData.map((data)=>
                    <CarDiv key={data.id}>
                        <div>
                        <img src={data.url} alt="" style={{ marginTop: "80px" }} />
                        </div>

                        <div className='greatdeal'>
                          <button style={{heigth:"24px",width:"74px",backgroundColor:"#1f7d57", fontSize: "12px", color: "white", borderRadius: "3px", border: "none", marginTop: "10px" }}>Great Deal</button>
                          <h3>{data.car_type}</h3>
                          <p>{data.car_name} or similar</p>

                                <div className='imge-div'>
                                    <img src={person} alt="" />  <p> 4 Automatic</p>
                                </div>
                                <div className='imge-div'>
                                    <img src={milege} alt="" /> <p> Unlimited mileage</p>
                                </div>
                                <div className='imge-div'>
                                    <img src={star} alt="" /><p >Enhanced cleaning</p>
                                </div>
                                <div className='imge-div'>
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

                               <Link to={`/carreserve/${data.id}`}><Button onClick={() => handleReserve(data.id)} >Reserve</Button></Link> 
                         </div>
                    </CarDiv>)
                }

                <div style={{marginLeft:"330px",marginBottom:"30px",marginTop:"20px"}} className="btn">
                   <Button1 onClick={handleShowMore} style={{justifyContent:"center"}}>Show More</Button1>
                </div>
                <img src="https://tpc.googlesyndication.com/simgad/6177323794858097722?" alt="banner" style={{marginLeft:"20px"}} className="ad-img"/>
            </Wraper>
         </div>
    )
}
