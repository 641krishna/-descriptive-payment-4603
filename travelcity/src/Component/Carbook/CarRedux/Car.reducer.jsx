import { CAR_ERROR, CAR_FETCH_DATA, CAR_LOADING, CAR_REFRESH } from "./Car.type";


const CarInitalState = {
    loading: false,
    error: false,
    Cardata: [],
  };
  
  export const CarReducer = (state = CarInitalState,{type,payload}) => {
    switch(type){
      case CAR_LOADING: return {...state,loading:payload};
      case CAR_FETCH_DATA: {return {...state,loading:false,Cardata:payload}};
      case CAR_ERROR: return {...state,loading:false,error:payload};
      case CAR_REFRESH:return {...state,loading:false,Cardata:payload}
      default:  return state;
    }
  };