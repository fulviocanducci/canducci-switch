import React from 'react'
import CanducciLabel from './components/CanducciLabel'
import CanducciCheckbox from './components/CanducciCheckbox'
import CanducciSpan from './components/CanducciSpan'
import Size from './enums/size'
import IPropsCheckbox from './interfaces/IPropsCheckbox'

const CanducciSwitch: React.FC<IPropsCheckbox> = ({
  round,
  size,
  ...shared
}) => {
  return (
    <CanducciLabel round={!!round} size={size}>
      <CanducciCheckbox {...shared} />
      <CanducciSpan />
    </CanducciLabel>
  )
}

CanducciSwitch.defaultProps = {
  round: false,
  size: Size.Medium
}

export { Size }

export default CanducciSwitch
