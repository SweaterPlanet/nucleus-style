import React from 'react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs/react'
import Image from './index'

export default {
  title: 'Image',
  component: Image,
  decorators: [withKnobs],
}

const testImg =
  'https://images.unsplash.com/photo-1595964960386-b18319904ea3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9'

export const Default = () => (
  <Image
    circle={boolean('circle', false)}
    round={boolean('round', false)}
    size={text('size', '200px')}
    src={text('src', testImg)}
  />
)
