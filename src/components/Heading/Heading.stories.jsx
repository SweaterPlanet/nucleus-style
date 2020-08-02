import React from 'react'
import { withKnobs, number, select, text } from '@storybook/addon-knobs/react'
import { H1, H2 } from './src'

export default {
  title: 'Heading',
  decorators: [withKnobs],
}

const textLabel = 'Text'

const h1Default = 'Heading 1'
const h2Default = 'Heading 2'

const colorLabel = 'Color'
const colorOptions = {
  aqua: 'aqua',
  black: 'black',
  blue: 'blue',
  green: 'green',
  paper: 'paper',
  purple: 'purple',
  red: 'red',
  slate: 'slate',
  white: 'white',
}
const colorDefault = 'black'

const opacityLabel = 'Opacity'
const opacityDefault = '1'

export const asH1 = () => (
  <H1
    color={select(colorLabel, colorOptions, colorDefault)}
    opacity={number(opacityLabel, opacityDefault)}
  >
    {text(textLabel, h1Default)}
  </H1>
)

asH1.story = {
  name: 'as H1',
}

export const asH2 = () => (
  <H2
    color={select(colorLabel, colorOptions, colorDefault)}
    opacity={number(opacityLabel, opacityDefault)}
  >
    {text(textLabel, h2Default)}
  </H2>
)

asH2.story = {
  name: 'as H2',
}
