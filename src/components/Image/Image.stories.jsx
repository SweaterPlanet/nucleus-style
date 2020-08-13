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
    square={boolean('square', false)}
    width={text('width', '200px')}
    height={text('height', '100px')}
    src={text('src', testImg)}
  />
)

export const Circle = () => (
  <Image
    circle={boolean('circle', true)}
    width={text('width', '200px')}
    src={text('src', testImg)}
  />
)

export const Round = () => (
  <Image
    round={boolean('round', true)}
    width={text('width', '200px')}
    height={text('height', '100px')}
    src={text('src', testImg)}
  />
)

export const Square = () => (
  <Image
    square={boolean('square', true)}
    width={text('width', '200px')}
    src={text('src', testImg)}
  />
)
