import React from 'react'
import { withKnobs, select, text } from '@storybook/addon-knobs/react'
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
  return (
    <Switch
      color={select(colorLabel, colorOptions, 'blue')}
      id={text('id', 'checkbox')}
    />
  )
}

export function Multiple() {
  return (
    <>
      <Switch
        color={select('color1', colorOptions, 'blue')}
        id={text('id1', 'checkbox')}
      />
      <Switch
        color={select('color2', colorOptions, 'green')}
        id={text('id2', 'checkbox2')}
      />
    </>
  )
}
