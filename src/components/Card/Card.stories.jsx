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

export const Default = () => (
  <Card
    bg={select(bgLabel, bgOptions, 'paper')}
    color={select(colorLabel, colorOptions, 'black')}
    display={text('Display', '')}
    height={text('Height', '80%')}
    margin={text('Margin', '')}
    maxHeight={text('Max Height', '')}
    maxWidth={text('Max Width', '')}
    minHeight={text('Min Height', '')}
    minWidth={text('Min Width', '')}
    opacity={number('Opacity', '1')}
    overflow={text('Overflow', '')}
    overflowX={text('Overflow', '')}
    overflowY={text('Overflow', '')}
    padding={text('Padding', '40px')}
    round={boolean('Round', false)}
    width={text('Width', '20%')}
  >
    Card
  </Card>
)
