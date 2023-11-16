import { screen } from '@testing-library/react'

import Button from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

describe('<Button />', () => {
  it('should render a button and with variant primary default', () => {
    const { container } = renderWithTheme(
      <Button variant="primary">Ver Cases</Button>
    )
    expect(container).toMatchSnapshot()

    expect(screen.getByRole('button', { name: /ver cases/i })).toHaveStyle({
      height: '5.6rem',
      width: '25rem',
      'font-size': '1.8rem'
    })

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
  it('should render a button small', () => {
    renderWithTheme(<Button size="small">Ver Cases</Button>)

    expect(screen.getByRole('button', { name: /ver cases/i })).toHaveStyle({
      height: '3.2rem',
      fontSize: '1.2rem'
    })
  })
  it('should render a button medium', () => {
    renderWithTheme(<Button size="medium">Ver Cases</Button>)

    expect(screen.getByRole('button', { name: /ver cases/i })).toHaveStyle({
      height: '5.6rem',
      'font-size': '1.8rem'
    })
  })
  it('should render a button large', () => {
    renderWithTheme(<Button size="large">Ver Cases</Button>)

    expect(screen.getByRole('button', { name: /ver cases/i })).toHaveStyle({
      height: '5.6rem',
      'font-size': '2.8rem'
    })
  })

  it('should render a button and with variant secondary', () => {
    renderWithTheme(<Button variant="secondary">Ver Cases</Button>)

    expect(screen.getByRole('button', { name: /ver cases/i })).toHaveStyleRule(
      'color',
      '#FBD968'
    )
    expect(screen.getByRole('button', { name: /ver cases/i })).toHaveStyleRule(
      'color',
      '#333333',
      { modifier: ':hover' }
    )

    expect(screen.getByRole('button', { name: /ver cases/i })).toHaveStyleRule(
      'background-color',
      'transparent'
    )

    expect(screen.getByRole('button', { name: /ver cases/i })).toHaveStyleRule(
      'background-color',
      '#FBD968',
      { modifier: ':hover' }
    )
    expect(screen.getByRole('button', { name: /ver cases/i })).toHaveStyleRule(
      'border',
      '1px solid #FBD968'
    )
    expect(screen.getByRole('button', { name: /ver cases/i })).toHaveStyleRule(
      'border',
      '0',
      { modifier: ':hover' }
    )
  })
})
