import React from 'react'
import CanducciLabel from './components/CanducciLabel'
import CanducciCheckbox from './components/CanducciCheckbox'
import CanducciSpan from './components/CanducciSpan'
import Size from './enums/size'
import IPropsCheckbox from './interfaces/IPropsCheckbox'

const CanducciSwitch: React.FC<IPropsCheckbox> = ({
  round,
  size,
  defaultColor,
  ...shared
}) => {
  return (
    <CanducciLabel round={!!round} size={size} defaultColor={defaultColor}>
      <CanducciCheckbox {...shared} />
      <CanducciSpan />
    </CanducciLabel>
  )
}

CanducciSwitch.defaultProps = {
  round: false,
  size: Size.Medium,
  defaultColor: '#2196f3'
}

export { Size }

export default CanducciSwitch
