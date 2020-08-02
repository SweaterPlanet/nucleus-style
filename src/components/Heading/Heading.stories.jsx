import React from 'react'
import { withKnobs, number, select, text } from '@storybook/addon-knobs/react'
import Heading from '.'
import H1 from './H1'

export default {
  title: 'Heading',
  decorators: [withKnobs],
}

const textLabel = 'Text'
const textDefault = 'Heading 1'

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
    {text(textLabel, textDefault)}
  </H1>
)

asH1.story = {
  name: 'as H1',
}
