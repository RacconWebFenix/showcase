import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

export const Wrapper = styled.button<ButtonProps>`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    border: 0;
    cursor: pointer;
    color: ${theme.colors.mainBg};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.large};
    text-decoration: none;
    line-height: ${theme.font.sizes.xlarge};
    display: inline-flex;
    align-items: center;
    justify-content: center;
  `}
`
