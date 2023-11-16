import styled, { css } from 'styled-components'
import { ButtonTypes } from '.'

const wrapperModifiers = {
  primary: () => css`
    ${({ theme }) => css`
      background: ${theme.colors.primary};
      color: ${theme.colors.mainBg};
      border: 0;
    `}
  `,
  secondary: () => css`
    ${({ theme }) => css`
      background-color: transparent;
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
      &:hover {
        border: 0;
        background-color: ${theme.colors.primary};
        color: ${theme.colors.mainBg};
      }
    `}
  `,
  small: () => css`
    ${({ theme }) => css`
      height: ${theme.spacings.medium};
      font-size: ${theme.font.sizes.xsmall};
    `}
  `,
  medium: () => css`
    ${({ theme }) => css`
      height: ${theme.spacings.xxlarge};
      font-size: ${theme.font.sizes.large};
    `}
  `,
  large: () => css`
    ${({ theme }) => css`
      height: ${theme.spacings.xxlarge};
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `
}

export const Wrapper = styled.button<ButtonTypes>`
  ${({ theme, size, variant }) => css`
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    width: 25rem;
    cursor: pointer;
    font-weight: ${theme.font.bold};
    text-decoration: none;
    line-height: ${theme.font.sizes.xlarge};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all ease 0.2s;

    &:hover {
      background: ${theme.colors.hovered};
      box-shadow: 10px 10px 5px 0px #000000;
    }

    &:active {
      box-shadow: 5px 5px 10px 1px #000000;
    }

    ${variant && wrapperModifiers[variant]}
    ${size && wrapperModifiers[size]}
  `}
`
