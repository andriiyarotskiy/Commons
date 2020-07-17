import React, {ChangeEvent, useState} from "react";
import InputNya from "../InputNya/InputNya";

type EditableSpanType = {
    value: string
    changeValueInput: (e: ChangeEvent<HTMLInputElement>) => void
}

const EditableSpan = (props: EditableSpanType) => {

    let [editMode, setEditMode] = useState(false)

    const onEditMode = () => {
        setEditMode(true)
    }

    const offEditMode = () => {
        setEditMode(false)
    }

    return (
        editMode
            ? <InputNya value={props.value}
                        onBlur={offEditMode}
                        onChange={props.changeValueInput}
            />
            : <span onClick={onEditMode}>{props.value}</span>
    )
}
export default EditableSpan