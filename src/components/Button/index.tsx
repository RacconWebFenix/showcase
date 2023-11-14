import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

const Button = ({ variant, children }: ButtonProps) => (
  <S.Wrapper variant={variant}>{children}</S.Wrapper>
)

export default Button
