import React from "react";
import styled from "styled-components";

const RadioWrapper = styled.div`
  display: inline-block;
`;

const Mark = styled.span`
  display: block;
  position: relative;
  border: 1.5px solid #1688DB;
  width: 17px;
  height: 17px;
  left: 0;
  border-radius: 50%;
  margin-right: 5px;
  vertical-align: middle;

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  /* identical to box height, or 112% */

  letter-spacing: 1px;
  
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: #1688DB;
    opacity: 0;
    left: 50%;
    top: 50%;
    position: absolute;
    transition: all 110ms;
  }
`;

const Input = styled.input`
  position: absolute;
  visibility: hidden;
  display: none;
  &:checked + ${Mark} {
    &::after {
      width: 9px;
      height: 9px;
      opacity: 1;
      left: 18%;
      top: 18%;
    }
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px 10px 5px 0;
  position: relative;
  color: white;
  ${props =>
    props.disabled &&
    `   cursor: not-allowed;
        opacity: 0.4;
    `}
`;

const Radio = ({ name, children }) => (
    <RadioWrapper>
        <Label>
            <Input name={name} type="radio" />
            <Mark />
            {children}
        </Label>
    </RadioWrapper>
);

export default Radio;

// *** Parent component ***//
//Radio
// const [state, setState] = useState('phone')
// const onChangeHandler = e => setState(e.target.value)
//Radio

// <Radio checked={state === 'phone'} value='phone'  onChange={onChangeHandler} name="test">Account Sharing</Radio>
