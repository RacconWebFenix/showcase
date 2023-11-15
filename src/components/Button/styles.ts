import styled, { css } from 'styled-components'
import { ButtonTypes } from '.'

export const Wrapper = styled.button<ButtonTypes>`
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
    transition: all ease 0.2s;

    &:hover {
      background: ${theme.colors.hovered};
      box-shadow: 10px 10px 5px 0px #000000;
    }

    &:active {
      box-shadow: 5px 5px 10px 1px #000000;
    }
  `}
`
