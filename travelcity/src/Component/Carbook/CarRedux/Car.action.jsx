import { CAR_ERROR, CAR_FETCH_DATA, CAR_INPUT_FILTER, CAR_LOADING, CAR_REFRESH, CAR_TYPE_FILTER } from "./Car.type"
import axios from "axios"

export const CarLoading=(val)=>{
   return {type:CAR_LOADING,payload:val}
}

export const CarError=(val)=>{
    return {type:CAR_ERROR,payload:val}
}

export const CarFetch=(page=1)=>async(dispatch)=>{
        dispatch(CarLoading(true))
        try{
            let response = await axios.get(`https://carapi20.herokuapp.com/Car?_page=${page}&_limit=5`);
            const data = response.data;
            dispatch({type:CAR_FETCH_DATA,payload:data})
        }
        catch(err){
            dispatch(CarError(true))
        }
        finally{
            dispatch(CarLoading(false))
        }
}

export const CarRefresh=()=>async(dispatch)=>{
    dispatch(CarLoading(true))
    try{
        let response = await axios.get(`https://carapi20.herokuapp.com/Car`);
        const data = response.data;
        dispatch({type:CAR_REFRESH,payload:data})
    }
    catch(err){
        dispatch(CarError(true))
    }
    finally{
        dispatch(CarLoading(false))
    }
}
export const CarTypeFilter=(val)=>{
    return{
        type:CAR_TYPE_FILTER,
        payload:val,
    }
}
export const CarInputFilter=(val)=>{
    return{
        type:CAR_INPUT_FILTER,
        payload:val,
    }
}