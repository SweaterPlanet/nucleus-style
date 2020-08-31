import React from 'react'
import {
  withKnobs,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs/react'
import ProgressBar from './index'

export default {
  title: 'ProgressBar',
  component: ProgressBar,
  decorators: [withKnobs],
}

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

const valueOptions = {
  range: true,
  min: 0,
  max: 100,
  step: 1,
}

export function Default() {
  return (
    <ProgressBar
      dark={boolean('dark', false)}
      color={select('color', colorOptions, 'blue')}
      value={number('value', 20, valueOptions)}
    />
  )
}
