import { CAR_ERROR, CAR_FETCH_DATA, CAR_INPUT_FILTER, CAR_LOADING, CAR_REFRESH, CAR_TYPE_FILTER } from "./Car.type";


const CarInitalState = {
    loading: false,
    error: false,
    Cardata: [],
    TypeFilter:"",
    InputFilter:"",
    InputStatus:false,
    TypeStatus:false,
  };
  
  export const CarReducer = (state = CarInitalState,{type,payload}) => {
    switch(type){
      case CAR_LOADING: return {...state,loading:payload};
      case CAR_FETCH_DATA: {return {...state,loading:false,Cardata:payload,InputStatus:false,TypeStatus:false}};
      case CAR_ERROR: return {...state,loading:false,error:payload};
      case CAR_REFRESH:return {...state,loading:false,Cardata:payload,InputStatus:false,TypeStatus:false};
      case CAR_TYPE_FILTER:return{...state,TypeFilter:payload,InputStatus:false,TypeStatus:true}
      case CAR_INPUT_FILTER:return{...state,InputFilter:payload,InputStatus:true,TypeStatus:false}
      default:  return state;
    }
  };