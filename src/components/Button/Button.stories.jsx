import React from 'react'
import {
  withKnobs,
  boolean,
  number,
  select,
  text,
} from '@storybook/addon-knobs/react'
import Button from './index'

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
}

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

const bgLabel = 'Background'
const bgOptions = {
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
const bgDefault = 'paper'

const opacityLabel = 'Opacity'
const opacityDefault = '1'

const maxWidthLabel = 'Max Width'
const maxWidthDefault = false

const roundLabel = 'Round'
const roundDefault = false

const textLabel = 'Text'
const textDefault = 'Button'
const xsDefault = 'XSmall'
const smDefault = 'Small'
const mdDefault = 'Medium'
const lgDefault = 'Large'
const xlDefault = 'XLarge'

export const All = () => (
  <>
    <Button
      size="xs"
      bg={select(bgLabel, bgOptions, bgDefault)}
      color={select(colorLabel, colorOptions, colorDefault)}
      maxWidth={boolean(maxWidthLabel, maxWidthDefault)}
      round={boolean(roundLabel, roundDefault)}
      opacity={number(opacityLabel, opacityDefault)}
    >
      {text(textLabel, textDefault)}
    </Button>
    <Button
      size="sm"
      bg={select(bgLabel, bgOptions, bgDefault)}
      color={select(colorLabel, colorOptions, colorDefault)}
      maxWidth={boolean(maxWidthLabel, maxWidthDefault)}
      round={boolean(roundLabel, roundDefault)}
      opacity={number(opacityLabel, opacityDefault)}
    >
      {text(textLabel, textDefault)}
    </Button>
    <Button
      size="md"
      bg={select(bgLabel, bgOptions, bgDefault)}
      color={select(colorLabel, colorOptions, colorDefault)}
      maxWidth={boolean(maxWidthLabel, maxWidthDefault)}
      round={boolean(roundLabel, roundDefault)}
      opacity={number(opacityLabel, opacityDefault)}
    >
      {text(textLabel, textDefault)}
    </Button>
    <Button
      size="lg"
      bg={select(bgLabel, bgOptions, bgDefault)}
      color={select(colorLabel, colorOptions, colorDefault)}
      maxWidth={boolean(maxWidthLabel, maxWidthDefault)}
      round={boolean(roundLabel, roundDefault)}
      opacity={number(opacityLabel, opacityDefault)}
    >
      {text(textLabel, textDefault)}
    </Button>
    <Button
      size="xl"
      bg={select(bgLabel, bgOptions, bgDefault)}
      color={select(colorLabel, colorOptions, colorDefault)}
      maxWidth={boolean(maxWidthLabel, maxWidthDefault)}
      round={boolean(roundLabel, roundDefault)}
      opacity={number(opacityLabel, opacityDefault)}
    >
      {text(textLabel, textDefault)}
    </Button>
  </>
)

export const XS = () => (
  <Button
    size="xs"
    bg={select(bgLabel, bgOptions, bgDefault)}
    color={select(colorLabel, colorOptions, colorDefault)}
    maxWidth={boolean(maxWidthLabel, maxWidthDefault)}
    round={boolean(roundLabel, roundDefault)}
    opacity={number(opacityLabel, opacityDefault)}
  >
    {text(textLabel, xsDefault)}
  </Button>
)

export const SM = () => (
  <Button
    size="sm"
    bg={select(bgLabel, bgOptions, bgDefault)}
    color={select(colorLabel, colorOptions, colorDefault)}
    maxWidth={boolean(maxWidthLabel, maxWidthDefault)}
    round={boolean(roundLabel, roundDefault)}
    opacity={number(opacityLabel, opacityDefault)}
  >
    {text(textLabel, smDefault)}
  </Button>
)

export const MD = () => (
  <Button
    size="md"
    bg={select(bgLabel, bgOptions, bgDefault)}
    color={select(colorLabel, colorOptions, colorDefault)}
    maxWidth={boolean(maxWidthLabel, maxWidthDefault)}
    round={boolean(roundLabel, roundDefault)}
    opacity={number(opacityLabel, opacityDefault)}
  >
    {text(textLabel, mdDefault)}
  </Button>
)

export const LG = () => (
  <Button
    size="lg"
    bg={select(bgLabel, bgOptions, bgDefault)}
    color={select(colorLabel, colorOptions, colorDefault)}
    maxWidth={boolean(maxWidthLabel, maxWidthDefault)}
    round={boolean(roundLabel, roundDefault)}
    opacity={number(opacityLabel, opacityDefault)}
  >
    {text(textLabel, lgDefault)}
  </Button>
)

export const XL = () => (
  <Button
    size="xl"
    bg={select(bgLabel, bgOptions, bgDefault)}
    color={select(colorLabel, colorOptions, colorDefault)}
    maxWidth={boolean(maxWidthLabel, maxWidthDefault)}
    round={boolean(roundLabel, roundDefault)}
    opacity={number(opacityLabel, opacityDefault)}
  >
    {text(textLabel, xlDefault)}
  </Button>
)
