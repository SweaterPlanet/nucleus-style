import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs/react'
import Switch from './index'

export default {
  title: 'Switch',
  component: Switch,
  decorators: [withKnobs],
}

const colorLabel = 'color'
const colorOptions = {
  aqua: 'aqua',
  black: 'black',
  blue: 'blue',
  green: 'green',
  purple: 'purple',
  red: 'red',
  slate: 'slate',
}

export function Default() {
  return <Switch color={select(colorLabel, colorOptions, 'blue')} />
}
