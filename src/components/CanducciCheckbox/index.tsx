import React from 'react'

import ICheckboxProps from '../../interfaces/ICheckboxProps'

const CanducciCheckbox: React.FC<ICheckboxProps> = (props) => (
  <input type='checkbox' {...props} />
)

export default CanducciCheckbox
