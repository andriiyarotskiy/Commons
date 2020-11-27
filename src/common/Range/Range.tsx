import React, {ChangeEvent} from "react";
import style from "./Range.module.css"

type RangeType = {
    minValue: string
    maxValue: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: string
}

const Range: React.FC<RangeType> = React.memo(({minValue, maxValue, onChange, value}) => {

    return (
        <div className={style.range}>
            <input type="range"
                   min={minValue}
                   max={maxValue}
                   onChange={onChange}
                   value={value}
                   step={"0"}
            />
            <label><b>{value}</b></label>
        </div>
    )
})
export default Range
