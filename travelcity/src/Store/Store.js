
import {legacy_createStore,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"
import { CarReducer } from "../Component/Carbook/CarRedux/Car.reducer";


const Combine = combineReducers({Car:CarReducer})
export const store = legacy_createStore(Combine,applyMiddleware(thunk));