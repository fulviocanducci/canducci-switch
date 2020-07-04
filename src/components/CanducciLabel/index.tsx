import styled from 'styled-components'
import Size from '../../enums/size'
import ICheckboxProps from '../../interfaces/ICheckboxProps'

const CanducciLabel = styled.label<ICheckboxProps>`
    position: relative;
    display: inline-block;
  
    ${(props) => props.size === Size.Big && `width:60px;height:34px;`}
    ${(props) => props.size === Size.Medium && `width:45px;height:25px;`}
    ${(props) => props.size === Size.Small && `width:30px;height:17px;`}
  
    input {
      display: none;
    }
  
    span {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${(props) => props.backgroundColorOff};
      -webkit-transition: 0.4s;
      transition: 0.4s;
      ${(props) =>
        props.round && props.size === Size.Big && `border-radius: 34px;`}
      ${(props) =>
        props.round && props.size === Size.Medium && `border-radius: 25px;`}
      ${(props) =>
        props.round && props.size === Size.Small && `border-radius: 17px;`}
    }
  
    span:before {
      position: absolute;
      content: '';
      ${(props) =>
        props.size === Size.Big &&
        `height:26px;width:26px;left:4px;bottom:4px;`}
      ${(props) =>
        props.size === Size.Medium &&
        `height:19px;width:19px;left:3px;bottom:3px;`}
      ${(props) =>
        props.size === Size.Small &&
        `height:13px;width:13px;left:2px;bottom:2px;`}
      
      background-color: ${(props) => props.cicleColor};
      -webkit-transition: 0.4s;
      transition: 0.4s;
      ${(props) => props.round && `border-radius: 50%;`}
    }
  
    input:checked + span {
      background-color: ${(props) => props.backgroundColorOn};
    }
  
    input:focus + span {
      box-shadow: 0 0 1px ${(props) => props.backgroundColorOn};
    }
  
    input:checked + span:before {
      ${(props) =>
        props.size === Size.Big &&
        `-webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);`}
      ${(props) =>
        props.size === Size.Medium &&
        `-webkit-transform: translateX(19px);
        -ms-transform: translateX(19px);
        transform: translateX(19px);`}
      ${(props) =>
        props.size === Size.Small &&
        `-webkit-transform: translateX(13px);
          -ms-transform: translateX(13px);
          transform: translateX(13px);`}
    }
  `
export default CanducciLabel
