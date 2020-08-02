import React from 'react'
import {
  withKnobs,
  boolean,
  number,
  select,
  text,
} from '@storybook/addon-knobs/react'
import Text from './index'

export default {
  title: 'Text',
  component: Text,
  decorators: [withKnobs],
}

const boldLabel = 'Bold'
const boldDefault = false

const textLabel = 'Text'
const textDefault = 'Text'

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

export const Default = () => (
  <Text
    bold={boolean(boldLabel, boldDefault)}
    color={select(colorLabel, colorOptions, colorDefault)}
    opacity={number(opacityLabel, opacityDefault)}
  >
    {text(textLabel, textDefault)}
  </Text>
)
