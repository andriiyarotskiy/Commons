import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes} from 'react'
import {OptionValueType} from "../../components/pages/Junior";



type SelectType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> &
    {
        optionValue: Array<OptionValueType>
        setSelected: (value: string) => void
        title: string
    }

const Select = (props: SelectType) => {

    let optionElement = props.optionValue.map(el => {

        return (
            <option key={el.id}>
                {el.title}
            </option>
        )
    })

    const changeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
       props.setSelected(e.currentTarget.value)
    }

    return (
        <>
            <select value={props.title} onChange={changeSelect}>
                {optionElement}
            </select>
        </>
    )
}

export default Select