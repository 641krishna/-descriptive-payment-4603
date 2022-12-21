import React from 'react'
import styled from '@emotion/styled'
import { useNavigate, useParams } from 'react-router-dom';
import "./Reserv.scss";
import DoorSlidingIcon from '@mui/icons-material/DoorSliding';
import HubIcon from '@mui/icons-material/Hub'; //manual
import EvStationIcon from '@mui/icons-material/EvStation'; //fuel
import Person2Icon from '@mui/icons-material/Person2';
import AirlinesIcon from '@mui/icons-material/Airlines'; //air cond
import CloudOffIcon from '@mui/icons-material/CloudOff'; // milege

const CompleateDiv = styled.div`
width : 90%;
margin : auto;
justify-content:space-between
gap : 20px;
display : flex;
.reserveflex{
    height :auto;
    width : 100%;
    border-radius : 8px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    line-height : 0.6;
    background-color : white;
    margin-top : 33px;
    padding-bottom:5px
    }
    .reserveflex{
        @media(max-width:800px){
              line-height:0.8
        }
    }
    .payment-div{
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; 
        height:auto;
        width:"100%";
        background-color : white;
        padding : 5px;
        margin-top : 20px;
        border-radius : 8px;
    }
    .payment-div{
        @media(max-width:800px){
            font-size:14px;
      }
    }
`
const ReserveDiv = styled.div`
height :auto;
width : 100%;
margin-top:30px;
border-radius : 8px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
background-color : white;
.top-section{
    display : flex;
    width:"100%";
    margin:"auto";
    justify-content : space-between;
    line-height: 0.6;
   
}

.smalldiv{
    width:32%;
    @media(max-width:800px){
        font-size:12px;
        line-height: 1;
    }
}
.images{
    @media(max-width:800px){
        height:"21px"
    }
}
`
const ReservFlex = styled.div`
display : flex;
width:100%
h3{
    margin-left : 10px;
   
}
p{
    margin-left : 20px;  
   
}
`
const Recomand = styled.div`
width : 100%;
height : 92px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
background-color : white;
border-radius : 8px;
.recomand{
    display : flex;
    justify-content : space-between;
    line-height: 0.4;
    margin-left : 5px;
    margin-right : 5px;
}
.recomand1{
    padding:5px;
    @media(max-width:800px){
        font-size:12px;
    }
}
`
const Rental = styled.div`
height : auto;
width : 100%;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
background-color : white;
border-radius : 8px;
.rental{
    display : flex;
    justify-content : space-between;
   
}
.rental1{
    @media(max-width:800px){
        font-size:13px;
    }
}
`
const Cleaning = styled.div`
width : 100%;
height : auto;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
background-color : white;
border-radius : 8px;
line-height : 0.9;
.cleaning{
    display : flex;
    justify-content : space-between;
     margin-top : -25px;
}
img{
    height : 30px;
    width : 60px
}
p{
    font-size : 14px;
   
}
.cleaning1{
    @media(max-width:800px){
        font-size:12px;
    }
}
`
const Button = styled.button`
 background-color : #2A6EC1;
height : 48px;
width : 337px ;
border : none;
border-radius : 5px;
color : white;
cursor: pointer;
font-size : 18px;
margin-left : 5px;

.CarDeatils{
    width:"65%";
    margin:"auto"
    @media(max-width:800px){
        width:"100%"
    }
}
`
export const Reserv = () => {
    const [loding, setLoding] = React.useState(false)
    const [error, setError] = React.useState(false)
    const [carData, setCarData] = React.useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    let taxPrice = 5;
    let inputsData = JSON.parse(localStorage.getItem("inputsData"));
    React.useEffect(() => {
        getData()
    }, [])
    const getData = () => {
        setLoding(true)
        fetch(`https://travelocity.onrender.com/Car/${id}`)
            .then((res) => res.json())
            .then((res) => setCarData(res))
            .catch((err) => setError(true))
            .finally(() => setLoding(false))
    }

    const handleReserve=()=>{
        // let totalCarPrice = (5+carData.price);
        let paymentDet = {
            type : "car",
            tax : 5,
            Price : carData.price
        }
        localStorage.setItem("PriceDetails",JSON.stringify(paymentDet));
        navigate("/payment")
    }

    return (
        <div style={{width:"100%",margin:"auto"}}>
            <CompleateDiv>
                <div style={{width:"65%",margin:"auto"}}>
                    <ReservFlex>
                        <ReserveDiv>
                            <button style={{ height: "24px", width: "74px", backgroundColor: "#1f7d57", fontSize: "12px", color: "white", borderRadius: "3px", border: "none", marginTop: "15px", marginLeft: "20px" }}>Great Deal</button>

                            <div className='top-section' style={{ padding: "10px" }}>
                                <div className='smalldiv'>
                                    <h3>{carData.car_type}</h3>
                                    <p id='Carname'> {carData.car_name}</p>
                                    <div>
                                    <span><Person2Icon style={{height:"21px"}}/></span><div id='infor'><p>{carData.capacity} Passenger</p></div>
                                    </div>
                                    <div><span><AirlinesIcon style={{height:"21px"}}/></span><p style={{lineHeight:"15px"}}>Air Conditioning</p></div>
                                    <div><span><CloudOffIcon style={{height:"21px"}}/></span><p style={{lineHeight:"15px"}}>Unlimited mileage</p></div>
                                    
                                    
                                    <p style={{ color: "#0D5AB9", marginLeft: "5px", textDecoration: "underline", cursor: "pointer" }}>See more</p>
                                </div>
                                <div className='smalldiv'>
                                <div><span><DoorSlidingIcon style={{height:"21px"}}/></span><p>5 Doors</p></div>
                                <div><span><HubIcon style={{height:"21px"}}/></span><p>Manual</p></div>
                                <div><span><EvStationIcon style={{height:"21px"}}/></span><p>Fuel info: full to full</p></div>
                                    
                                
                                   
                                    <p style={{ color: "#0D5AB9", marginLeft: "5px", textDecoration: "underline", cursor: "pointer" }}>See more</p>
                                </div>
                                <div >
                                    {/* <img src="https://mediaim.expedia.com/cars/40/3a591a6a-3820-47f4-ae4e-569400f1ed87.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165" alt="" /> */}
                                    <img src={carData.url} alt="" width="100%" />
                                </div>
                            </div>

                        </ReserveDiv >
                    </ReservFlex>
                    <Recomand>
                        <div className='recomand' style={{ marginTop: "20px" }}>
                            <div className='recomand1'>
                                <h3 >Customer recommendations</h3>
                                <p>73% recommend</p>
                                <p style={{lineHeight:"15px"}}>Best rated for convenient pick-up location and short wait time</p>
                            </div>
                            <div className='recomand1'>
                                <img src={carData.img_url} width="90%" alt="" />
                                <p style={{ color: "#0D5AB9", marginLeft: "5px", textDecoration: "underline", cursor: "pointer" }}>452 Rating </p>
                            </div>
                        </div>
                    </Recomand>
                    <Rental>
                        <h3 className='rental1' style={{ padding: "8px", marginTop: "20px" }}>Car Rental Location</h3>
                        <div className='rental' style={{ padding: "8px" }}>
                            <div className='rental1'>
                                <h3>Pick Up</h3>
                                <p>Fri, Sep 23, 10:30am</p>
                                <p>IGI Airport
                                    7212 Dallas Love Field Airport, Cedar <br />
                                    Springs Road, Dallas, {"hello"}, India 75235-2889</p>
                                {/* <p style={{fontSize : "13px"}}>Counter in terminal,  free shuttle to the car located in the airport.</p> */}
                            </div>
                            <div className='rental1'>
                                <h3>Drop-Off</h3>
                                <p>Sat, Sep 24, 10:30am</p>
                                <p>Amrit Chowk
                                     Love Field Park, <br /> Cedar Springs Road, <br /> Jaipur, Rajasthan, India 75235-2889</p>
                            </div>
                        </div>


                    </Rental>
                    <Cleaning className='cleaning1'>
                        <h3 className='cleaning1' style={{ padding: "8px" }}>Cleaning and safety practices</h3>
                        <div className='cleaning' style={{ padding: "5px" }}>
                            <div>
                                <p>Masks are required at the pick-up location
                                </p>
                                <p>High-touch surfaces are sanitized at pick-up locations</p>
                            </div>
                            <div>
                                <p>Car interiors and exteriors cleaned with disinfectant <br /> before pick-up</p>
                                <p>
                                    Social distancing measures</p>
                            </div>
                            <div>
                                <img src="https://c.travel-assets.com/static/cars/cleanliness/Sanitize_Hertz_Zd.png" alt="" />

                            </div>
                        </div>
                    </Cleaning>
                </div>
                <div style={{width:"32%"}}>
                    <div style={{width:"100%"}}>
                        <div className='reserveflex'>
                            <h3 style={{ padding: "15px" }}>${carData.price}
                            </h3>
                            <p style={{ marginTop: "-10px", marginLeft: "10px" }}>Per day</p>
                            <p style={{ marginLeft: "10px" }}>Non-refundable

                            </p>
                            <p style={{ marginLeft: "10px" }}>No changes or cancellations</p>
                            <p style={{ marginLeft: "10px" }}>Pay now and save</p>
                        </div>
                        <div className='payment-div'>
                            <h3>Price Details</h3>
                            <h3>Pay Now</h3>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <p>Car rental fee x 1 day</p>
                                <p>${carData.price}</p>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <p>Extra Tax</p>
                                <p>${taxPrice}</p>
                            </div>
                            <hr />
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <h3>Total</h3>
                                <h3 style={{"font-weight" : "bold"}}>${carData.price + taxPrice}</h3>
                            </div>
                            <Button style={{width:"98%"}} onClick={()=>handleReserve()} >Reserve</Button>
                        </div>

                    </div>
                </div>

            </CompleateDiv>
        </div>
    )
}