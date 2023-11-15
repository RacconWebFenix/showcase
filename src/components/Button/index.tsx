import * as S from './styles'

export type ButtonTypes = {
  size?: 'small' | 'medium' | 'large'
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

const Button = ({ variant, children, size = 'medium' }: ButtonTypes) => (
  <S.Wrapper variant={variant} size={size}>
    {children}
  </S.Wrapper>
)

export default Button
