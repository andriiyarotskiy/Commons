import React, {ChangeEvent} from "react";
import style from "../../Range/Range.module.css"

type RangeType = {
    minValue?: number
    maxValue?: number
    onChange?: (event: React.ChangeEvent<{}>, newValue: number | number[]) => void
    value?: number | number[]
}

const DoubleSlider: React.FC<RangeType> = React.memo(({minValue, maxValue, onChange, value}) => {

    return (
        <>
            <div className={style.range}>
                <input type="range"
                       min={minValue}
                       max={maxValue}
                       onChange={onChange}
                       step={"10"}
                />
                <label><b>{value}</b></label>
            </div>
        </>
    )
})
export default DoubleSlider
