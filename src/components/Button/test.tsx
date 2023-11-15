import { screen } from '@testing-library/react'

import Button from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

describe('<Button />', () => {
  it('should render a button and with variant primary', () => {
    const { container } = renderWithTheme(
      <Button variant="primary">Ver Cases</Button>
    )
    expect(container).toMatchSnapshot()
    expect(screen.getByRole('button', { name: /ver cases/i })).toHaveStyleRule(
      'background',
      '#FBD968'
    )
  })

  it('should render a button and with variant primary on hover', () => {
    renderWithTheme(<Button variant="primary">Ver Cases</Button>)

    expect(screen.getByRole('button', { name: /ver cases/i })).toHaveStyleRule(
      'background',
      '#F8D048',
      { modifier: ':hover' }
    )
  })
})
