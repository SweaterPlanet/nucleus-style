import React from 'react'
import { withKnobs, boolean, color } from '@storybook/addon-knobs/react'
import Promotion from './index'

export default {
  title: 'Promotion',
  component: Promotion,
  decorators: [withKnobs],
}

const bgLabel = 'background-color'
const bgDefault = '#000000'

const underlineLabel = 'underline'
const underlineDefault = false

export const Default = () => (
  <Promotion
    bg={color(bgLabel, bgDefault)}
    underline={boolean(underlineLabel, underlineDefault)}
  >
    Promotion
  </Promotion>
)
