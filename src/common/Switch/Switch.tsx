import React from 'react';
import styled from "styled-components";


const CheckBox = styled.input.attrs({type: 'checkbox'})``;
const SwitchSpan = styled.span``
const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 27px;
  height: 12px;

  ${CheckBox} {
    display: none;

    &:checked + ${SwitchSpan}:before {
      transform: translateX(15px);
      background: #1688DB;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(186, 5, 14, 0.2);
    }

    &:checked + ${SwitchSpan} {
      background: rgba(255, 255, 255, 0.1);
    }
  }

  ${SwitchSpan} {
    position: absolute;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 25px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: background-color 0.2s ease;

    &:before {
      position: absolute;
      content: "";
      width: 16px;
      top: -2px;
      left: -2px;
      height: 16px;
      background: #858B8F;
      border-radius: 50%;
      transition: transform 0.3s ease;
    }
  }
`;

const Switch = ({checked, onChange}) => {
    return (
        <ToggleSwitch>
            <CheckBox checked={checked} onChange={onChange} type="checkbox"/>
            <SwitchSpan/>
        </ToggleSwitch>
    );
};

export default Switch;


//Component
// function ToggleSwitch() {
//     const [isToggled, setIsToggled] = useState(false);
//     const onToggle = () => setIsToggled(!isToggled);
//     return (
//         <label className="toggle-switch">
//             <input type="checkbox" checked={isToggled} onChange={onToggle} />
//             <span className="switch" />
//         </label>
//     );
// }

//Without Styled Components
/*
.toggle-switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;
}
    .toggle-switch input[type="checkbox"] {
    display: none;
}
.toggle-switch .switch {
        position: absolute;
        cursor: pointer;
        background-color: #ccc;
        border-radius: 25px;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transition: background-color 0.2s ease;
    }
    .toggle-switch .switch::before {
            position: absolute;
            content: "";
            left: 2px;
            top: 2px;
            width: 21px;
            height: 21px;
            background-color: #aaa;
            border-radius: 50%;
            transition: transform 0.3s ease;
        }
        .toggle-switch input[type="checkbox"]:checked + .switch::before {
                transform: translateX(25px);
                background-color: #6699cc;
            }
            .toggle-switch input[type="checkbox"]:checked + .switch {
                    background-color: #336699;
                }*/
