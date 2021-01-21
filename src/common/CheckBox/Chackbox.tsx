import React, {useState} from 'react';
import styled from 'styled-components';
import CheckIcon from './check.svg'


const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Icon = styled(CheckIcon)`
  //fill: none;
  //stroke: white;
  //stroke-width: 3px;
`
const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  font-size: 12px;
  border-radius: 2px;
  transition: all 150ms;
  //border: 1.5px solid #0668AF;
  border: ${props => (props.checked ? '1.5px solid #1688DB' : '1.5px solid #0668AF')};
  background: ${props => (props.checked ? '#1688DB' : 'transparent')};

  :hover {
    border: 1.5px solid #1688DB;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  }

  cursor: pointer;
  position: relative;

  img {
    top: 2px;
    position: absolute;
  }
`

const Checkbox = React.memo(({className, isChecked, ...props}: any) => {

    const [checked, setChecked] = useState(isChecked)

    const handleCheckboxChange = (event: any) => {
        setChecked(event.target.checked)
    }

    console.log('render checkbox')
    return (

        <label>
            <CheckboxContainer className={className}>
                <HiddenCheckbox checked={checked} onChange={handleCheckboxChange} {...props} />
                <StyledCheckbox checked={checked}>
                    {checked && <img src={CheckIcon} alt=""/>}
                </StyledCheckbox>
            </CheckboxContainer>
        </label>
    )

})


export default Checkbox


/*
<Icon viewBox="0 2 24 24">
    <polyline points="20 6 9 17 4 12"/>
    </Icon>*/
