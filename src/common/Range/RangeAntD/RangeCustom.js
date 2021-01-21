import React, {useState} from 'react';
import {Slider} from 'antd';
import styled, {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`

  body {
    .ant-tooltip-content {
      padding-left: 6px;

      &:before {
        content: '+';
        opacity: ${props => props.isPlus ? 0 : 1};
        position: absolute;
        right: calc(100% - 6px);
        color: white;
      }
    }


    .ant-tooltip-arrow {
      display: none;
    }

    .ant-tooltip-inner {
      box-shadow: none;
      padding: 0;
      background: transparent;
    }

    .ant-tooltip-placement-bottom,
    .ant-tooltip-placement-bottomLeft,
    .ant-tooltip-placement-bottomRight {
      padding-top: 0;
    }
  }
`;


const SliderStyle = styled(Slider)`
  font-family: Roboto, sans-serif;

  &:hover {
    background: none;
  }

  .ant-slider-rail {
    background: #359CFE !important;
    opacity: .4;
    border-radius: 0;

    &:after {
      content: '';
      position: absolute;
      //top: 0;
      right: -10px;
      height: inherit;
      width: 10px;
      background: #359CFE;
    }
  }

  .ant-slider-track {
    border-radius: 0;
    background: #359CFE !important;
  }

  .ant-slider-handle {
    border-radius: 0;
    background: #359CFE;
    border: none;
    outline: none;
    transform: rotate(45deg) !important;
  }


  .ant-slider-step {
    .ant-slider-dot {
      top: 4px;
      width: 3px;
      margin-left: 5px;
      height: 5px;
      border-radius: 0;
      border: none;
      background: #359CFE;
      opacity: .4;
    }
  }
`

const marks = {
    5: '',
    25: '',
    50: '',
    75: '',
    95: '',
};


const RangeCustom = ({range, value}) => {
    const [rangeValue, setRangeValue] = useState(value)

    const isPlus = (rangeValue === 0) || (rangeValue === undefined || Array.isArray(rangeValue))

    return (
        <>
            <GlobalStyle isPlus={isPlus}/>
            <SliderStyle
                value={rangeValue}
                tooltipVisible
                defaultValue={range ? [0, 100] : 100}
                onChange={value => setRangeValue(value)}
                tooltipPlacement={"bottom"}
                marks={marks}
                range={range}
                max={100}
            />
        </>
    );
}

export default RangeCustom;
