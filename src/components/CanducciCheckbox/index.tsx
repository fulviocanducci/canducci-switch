import React from 'react'

import IPropsCheckbox from '../../interfaces/IPropsCheckbox'

const CanducciCheckbox: React.FC<IPropsCheckbox> = (props) => (
  <input type='checkbox' {...props} />
)

export default CanducciCheckbox
