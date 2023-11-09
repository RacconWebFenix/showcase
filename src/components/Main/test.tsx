import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the Heading', () => {
    const { container } = render(<Main />)
    expect(
      screen.getByRole('heading', { name: /Showcase Marcos Domingues/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the color correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#333333' })
  })
})
