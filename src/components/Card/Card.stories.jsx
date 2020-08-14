import React from 'react'
import {
  withKnobs,
  boolean,
  number,
  select,
  text,
} from '@storybook/addon-knobs/react'
import Card from './index'

export default {
  title: 'Card',
  component: Card,
  decorators: [withKnobs],
}

const bgLabel = 'background-color'
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

const colorLabel = 'color'
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

export const Default = () => (
  <Card
    bg={select(bgLabel, bgOptions, 'paper')}
    border={text('border', '')}
    color={select(colorLabel, colorOptions, 'black')}
    cursor={text('cursor', 'auto')}
    display={text('display', '')}
    height={text('height', '80%')}
    margin={text('margin', '')}
    maxHeight={text('maxHeight', '')}
    maxWidth={text('maxWidth', '')}
    minHeight={text('minHeight', '')}
    minWidth={text('minWidth', '')}
    opacity={number('opacity', '1')}
    overflow={text('overflow', '')}
    overflowX={text('overflowX', '')}
    overflowY={text('overflowY', '')}
    padding={text('padding', '40px')}
    round={boolean('round', false)}
    width={text('width', '20%')}
  >
    Card
  </Card>
)
