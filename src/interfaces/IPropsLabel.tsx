import Size from '../enums/size'

interface IPropsLabel extends React.HTMLAttributes<HTMLInputElement> {
  round?: boolean
  size?: Size
  defaultColor?: string
}

export default IPropsLabel
