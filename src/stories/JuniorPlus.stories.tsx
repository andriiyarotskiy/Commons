import React from 'react'
import JuniorPlus from "../components/pages/JuniorPlus";
import {ReduxStoreProviderDecorator} from "./ReduxStoreProviderDecorator";

export default {
    title: 'Junior Plus Page',
    component: JuniorPlus,
    decorators: [ReduxStoreProviderDecorator]
}

export const JuniorPlusPage = (props: any) => {
    return <JuniorPlus/>
}