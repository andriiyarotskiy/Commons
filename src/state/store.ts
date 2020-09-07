import {combineReducers, createStore} from "redux";
import {juniorPageLoadingReducer} from "./juniorPageLoadingReducer";
import themeSwitcherReducer from "./themeSwitcherReducer";


const RootReducer = combineReducers({
    juniorPage: juniorPageLoadingReducer,
    themeSwitcher: themeSwitcherReducer
})

export const store = createStore(RootReducer)

export type RootStateType = ReturnType<typeof RootReducer>
