import Size from '../enums/size'

interface ICheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  round?: boolean
  size?: Size
  backgroundColorOn?: string
  backgroundColorOff?: string
  cicleColor?: string
}

export default ICheckboxProps
