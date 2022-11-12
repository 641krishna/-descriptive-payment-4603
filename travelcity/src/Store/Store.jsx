import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"
import { Authreducer } from "./Reducer";
import {CarReducer} from "../Components/Carbook/CarRedux/Car.reducer"



const Combine = combineReducers({Auth:Authreducer,Car:CarReducer});
export const Store = legacy_createStore(Combine,applyMiddleware(thunk));