import Size from '../enums/size'

interface IPropsCheckbox extends React.HTMLAttributes<HTMLInputElement> {
  round?: boolean
  size?: Size
}

export default IPropsCheckbox
