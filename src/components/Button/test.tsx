import { screen } from '@testing-library/react'

import Button from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

describe('<Button />', () => {
  it('should render a button and with variant primary', () => {
    renderWithTheme(<Button variant="primary">Ver Cases</Button>)

    expect(screen.getByRole('button', { name: /ver cases/i })).toHaveStyle({
      backgroundColor: '#FBD968'
    })
  })
})
