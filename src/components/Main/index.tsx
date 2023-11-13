import * as S from './styles'

const Main = ({
  title = 'Showcase Marcos Domingues',
  description = 'Transformando Códigos em Experiências Visuais.'
}: {
  title?: string
  description?: string
}) => (
  <S.Wrapper>
    <h1>{title}</h1>
    <p>{description}</p>
  </S.Wrapper>
)

export default Main
