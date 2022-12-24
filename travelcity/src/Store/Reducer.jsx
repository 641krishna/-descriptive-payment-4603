import { getData, getData1, setData, setData1 } from "../LocalStorage/LocalStorage";
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOG_OUT, PAYMENT_TYPE } from "./ActionTypes";

const initState = {
  login: getData1("Login") || false,
  userName: getData("username") || "",
  paymentAmount: null
};

export const Authreducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      setData("username", action.payload);
      setData1("Login", true);
      return {
        ...state,
        login: getData1("Login"),
        userName: getData("username"),
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        login: false,
      };
    case LOG_OUT:
      setData("username", "");
      setData1("Login", "");
      return {
        ...state,
        login: getData1('Login'),
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