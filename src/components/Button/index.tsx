import * as S from './styles'

export type ButtonTypes = {
  size?: 'small' | 'medium' | 'large'
  children?: React.ReactNode
  variant?: 'primary' | 'secondary'
  sharedicon?: JSX.Element
}

const Button = ({
  variant = 'primary',
  children,
  size = 'medium',
  sharedicon
}: ButtonTypes) => (
  <S.Wrapper variant={variant} size={size} sharedicon={sharedicon}>
    {sharedicon}
    {children && <>{children}</>}
  </S.Wrapper>
)

export default Button
