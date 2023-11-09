import { Meta, StoryObj } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  parameters: {
    layout: 'fullscreen',
    controls: { expanded: true }
  }
} as Meta

export const Template: StoryObj = {}

export const Basic: StoryObj = {
  args: {
    title: 'Showcase Marcos Domingues'
  }
}
