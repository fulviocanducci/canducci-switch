import React from 'react'
import CanducciLabel from './components/CanducciLabel'
import CanducciCheckbox from './components/CanducciCheckbox'
import CanducciSpan from './components/CanducciSpan'
import Size from './enums/size'
import ICheckboxProps from './interfaces/ICheckboxProps'

const CanducciSwitch: React.FC<ICheckboxProps> = ({
  round,
  size,
  backgroundColorOn,
  backgroundColorOff,
  cicleColor,
  ...shared
}) => {
  return (
    <CanducciLabel
      round={!!round}
      size={size}
      backgroundColorOn={backgroundColorOn}
      backgroundColorOff={backgroundColorOff}
      cicleColor={cicleColor}
    >
      <CanducciCheckbox {...shared} />
      <CanducciSpan />
    </CanducciLabel>
  )
}

CanducciSwitch.defaultProps = {
  round: false,
  size: Size.Medium,
  backgroundColorOn: '#2196f3',
  backgroundColorOff: '#ccc',
  cicleColor: '#ffffff'
}

export { Size }

export default CanducciSwitch
