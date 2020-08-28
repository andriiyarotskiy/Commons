import React from "react";
import {RadioTypeArr} from "../../components/pages/Junior";

type RadioTypeProps = {
    radioArr: Array<RadioTypeArr>
    changeStatus: (id: string) => void
}

const Radio = React.memo((props: RadioTypeProps) => {

    let radioJsxElement = props.radioArr.map(c => {
        const onChangeHandler = () => {
            props.changeStatus(c.id)
        }
        return (
            <div key={c.id}>
                <label htmlFor={c.id}>{c.value}</label>
                <input
                    type="radio"
                    value={c.value}
                    name={c.name}
                    checked={c.status}
                    onChange={onChangeHandler}
                />
            </div>
        )
    })
    return (
        <>
            {radioJsxElement}
        </>
    )
})

export default Radio;