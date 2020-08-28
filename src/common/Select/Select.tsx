import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes, useCallback} from 'react'
import {OptionValueType} from "../../components/pages/Junior";


type SelectType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> &
    {
        optionValue: Array<OptionValueType>
        setSelected: (value: string) => void
        title: string
    }

const Select = React.memo((props: SelectType) => {

    let optionElement = props.optionValue.map(el => {
        return (
            <option key={el.id}>
                {el.title}
            </option>
        )
    })

    const changeSelect = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        props.setSelected(e.currentTarget.value)
    }, [props.setSelected])

    return (
        <>
            <select value={props.title} onChange={changeSelect}>
                {optionElement}
            </select>
        </>
    )
})

export default Select