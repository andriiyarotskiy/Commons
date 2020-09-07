import React from "react";
import {combineReducers, createStore} from "redux";
import {juniorPageLoadingReducer} from "../state/juniorPageLoadingReducer";
import themeSwitcherReducer from "../state/themeSwitcherReducer";
import {RootStateType} from "../state/store";
import { Provider } from "react-redux";


const RootReducer = combineReducers({
    juniorPage: juniorPageLoadingReducer,
    themeSwitcher: themeSwitcherReducer
})

export const store = createStore(RootReducer)

const initialGlobalState = {
    juniorPage: {
        loading: false
    },
    themeSwitcher: {
        color: 'jet',
    }
}

export const storyBookStore = createStore(RootReducer, initialGlobalState as RootStateType);

export const ReduxStoreProviderDecorator = (storyFn: any) => (
    <Provider
        store={storyBookStore}>{storyFn()}
    </Provider>)
