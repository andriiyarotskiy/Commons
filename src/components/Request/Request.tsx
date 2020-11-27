import React, {ChangeEvent, useEffect, useState} from "react";
import ButtonNya from "../../common/ButtonNya/ButtonNya";
import {Checkbox} from "@material-ui/core";
import {RequestsAPI} from "./RequestsAPI";


export const Request = () => {

    const [valueCheck, setValueCheck] = useState(false)
    const [valueRequest, setValueRequest] = useState('')
    const [valueError, setValueError] = useState('')

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValueCheck(e.currentTarget.checked)
    }
    const sendPostReques = () => {
        setValueCheck(!valueCheck)
    }

    useEffect(() => {
        if (valueCheck) {
            RequestsAPI.requestPost(valueCheck)
                .then((res) => {
                    setValueRequest(res.statusText)
                })
                .catch((error) => {
                    setValueError(error.message)
                })
        } else {
            setValueRequest('')
        }

    }, [valueCheck])


    return (
        <>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Checkbox
                    checked={valueCheck}
                    color="secondary"
                    inputProps={{'aria-label': 'secondary checkbox'}}
                    onChange={changeHandler}
                />
                <ButtonNya onClick={sendPostReques}>Request</ButtonNya>
                <div>
                    <span>{valueRequest}</span>
                    <span>{valueError}</span>
                </div>
            </div>

        </>
    )
}
