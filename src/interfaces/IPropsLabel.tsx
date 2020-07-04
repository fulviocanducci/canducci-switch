import Size from '../enums/size'

interface IPropsLabel extends React.HTMLAttributes<HTMLInputElement> {
  round?: boolean
  size?: Size
}

export default IPropsLabel
