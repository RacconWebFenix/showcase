import { Meta, StoryObj } from '@storybook/react'
import { Share } from '@styled-icons/bootstrap/Share'

import Button from '.'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Template: StoryObj = {
  args: {
    children: 'Ver Cases'
  }
}

export const SharedIcon: StoryObj = {
  args: {
    children: '',
    sharedicon: <Share />
  }
}
