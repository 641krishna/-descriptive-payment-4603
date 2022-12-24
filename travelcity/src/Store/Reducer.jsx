import { getData, setData } from "../LocalStorage/LocalStorage";
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOG_OUT, PAYMENT_TYPE } from "./ActionTypes";

const initState = {
  login: false,
  userName: getData("username") || "",
  paymentAmount: null
};

export const Authreducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: true,
        userName: action.payload,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        login: false,
      };
    case LOG_OUT:
      return {
        ...state,
        login: false,
        userName: "",
      };
    case PAYMENT_TYPE:{
   
      let paymentDet={
        type : "hotel",
        tax : 8,
        Price : action.payload 
      }
      localStorage.setItem("PriceDetails", JSON.stringify(paymentDet));
      return {
        ...state,
        paymentAmount: action.payload
      }
    }

    default: {
      return state;
    }
  }
};