import React from 'react'
import styled from 'styled-components'

interface IProps extends React.HTMLAttributes<HTMLInputElement> {}

const CanducciInputCheckbox = styled.input.attrs({
  type: 'checkbox'
})`
  cursor: pointer;
  width: 100px;
  height: 10px;
  position: relative;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  outline: none;
  background: #e7e5e5;
  border-radius: 30px;
  -moz-border-radius: 30px;
  -webkit-border-radius: 30px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  transation: 0.4s;

  :checked {
    background: #3498db;
  }

  &::before {
    font-family: 'fontAwesome';
    font-size: 22pt;
    padding-top: 5px;
    padding-left: 5px;
    content: '\f00c';
    width: 15px;
    height: 15px;
    color: #c9c9c9;
    transform: scale(1.1);
    position: absolute;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    left: 0;
    top: 0;
    background: #ffffff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: 0.4s;
  }

  :checked::before {
    left: 100px;
    color: #3998db;
  }
`

const CanducciSwitch: React.FC<IProps> = (props) => {
  return <CanducciInputCheckbox {...props} />
}

CanducciSwitch.defaultProps = {}

export default CanducciSwitch
