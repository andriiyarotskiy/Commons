import React from "react";
import style from "../../Range/Range.module.css"
import {Slider} from "@material-ui/core";


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
                <Slider
                    color="primary"
                    value={value}
                    onChange={onChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    min={minValue}
                    max={maxValue}
                />
            </div>
        </>
    )
})
export default DoubleSlider
