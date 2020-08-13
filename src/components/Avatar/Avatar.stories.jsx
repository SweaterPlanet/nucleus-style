import React from 'react'
import { withKnobs, color, text } from '@storybook/addon-knobs/react'
import Avatar from './index'

export default {
  title: 'Avatar',
  component: Avatar,
  decorators: [withKnobs],
}

const bgLabel = 'background-color'
const bgDefault = '#000000'

const colorLabel = 'color'
const colorDefault = '#ffffff'

const initialsLabel = 'initials'

export const Default = () => (
  <Avatar
    bg={color(bgLabel, bgDefault)}
    color={color(colorLabel, colorDefault)}
    initials={text(initialsLabel, 'AB')}
  />
)
