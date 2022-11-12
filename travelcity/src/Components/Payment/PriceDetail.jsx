import { Divider } from "@material-ui/core";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
  background: white;
  width: 50%;
  margin: 40px auto;
  padding: 15px;
  height: fit-content;
  .title {
    font-weight: 700;
    font-size: 1.4rem;
    color: #1f1e1e;
  }
  .room-detail,
  .taxes,
  .total {
    display: flex;
    justify-content: space-between;
    color: #111111;
  }
  .total {
    font-weight: 700;
    font-size: 1.2rem;
  }
  .save {
    width: 40%;
    padding: 3px 8px;
    border-radius: 10px;
    color: white;
    background: green;
    text-align: center;
  }
  .coupon {
    color: blue;
    font-size: 0.8rem;
  }
`;

export const PriceDetail = ({ price }) => {

  const paymentAmount = useSelector((state)=>state.paymentAmount);

  let {type,tax, Price} = JSON.parse(localStorage.getItem("PriceDetails"));
    return (
        <Wrapper>
            <p className="title">Price Details</p>
            <Divider />
            {type==="car" ? 
             <div className="room-detail">
             <p>Booked Price</p>
             <p>${Price}</p>
         </div> :
             <div className="room-detail">
             <p>1 room x 1 night</p>
             <p>${Price}</p>
         </div>
          }
           
            <div className="save">You saved 10%</div>
            <div className="taxes">
                <p>Taxes and fees</p>
                <p>${tax}</p>
            </div>
            <Divider />
            <div className="total">
                <p>Total</p>
                <p>${Price + tax}</p>
            </div>
            <p className="coupon">Use a coupon, credit, or promotion code</p>
        </Wrapper>
    );
};