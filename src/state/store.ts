import {combineReducers, createStore} from "redux";
import {juniorPageLoadingReducer} from "./juniorPageLoadingReducer";


const RootReducer = combineReducers({
    juniorPage: juniorPageLoadingReducer
})

export const store = createStore(RootReducer)

export type RootStateType = ReturnType<typeof RootReducer>
