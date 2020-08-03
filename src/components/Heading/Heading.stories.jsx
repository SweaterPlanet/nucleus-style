import React from 'react'
import { withKnobs, number, select, text } from '@storybook/addon-knobs/react'
import Heading from './index'
import { H1, H2, H3, H4 } from './src'

export default {
  title: 'Heading',
  component: Heading,
  decorators: [withKnobs],
}

const textLabel = 'Text'
const textDefault = 'Heading'
const h1Default = 'Heading 1'
const h2Default = 'Heading 2'
const h3Default = 'Heading 3'
const h4Default = 'Heading 4'

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

export const All = () => (
  <>
    <H1
      color={select(colorLabel, colorOptions, colorDefault)}
      opacity={number(opacityLabel, opacityDefault)}
    >
      {text(textLabel, textDefault)}
    </H1>
    <H2
      color={select(colorLabel, colorOptions, colorDefault)}
      opacity={number(opacityLabel, opacityDefault)}
    >
      {text(textLabel, textDefault)}
    </H2>
    <H3
      color={select(colorLabel, colorOptions, colorDefault)}
      opacity={number(opacityLabel, opacityDefault)}
    >
      {text(textLabel, textDefault)}
    </H3>
    <H4
      color={select(colorLabel, colorOptions, colorDefault)}
      opacity={number(opacityLabel, opacityDefault)}
    >
      {text(textLabel, textDefault)}
    </H4>
  </>
)

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

export const asH3 = () => (
  <H3
    color={select(colorLabel, colorOptions, colorDefault)}
    opacity={number(opacityLabel, opacityDefault)}
  >
    {text(textLabel, h3Default)}
  </H3>
)

asH3.story = {
  name: 'as H3',
}

export const asH4 = () => (
  <H4
    color={select(colorLabel, colorOptions, colorDefault)}
    opacity={number(opacityLabel, opacityDefault)}
  >
    {text(textLabel, h4Default)}
  </H4>
)

asH4.story = {
  name: 'as H4',
}
