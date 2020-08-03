import React from 'react'
import { withKnobs, select, text } from '@storybook/addon-knobs/react'
import Box from './index'

export default {
  title: 'Box',
  component: Box,
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
  <Box
    bg={select(bgLabel, bgOptions, 'paper')}
    color={select(colorLabel, colorOptions, 'black')}
    display={text('Display', '')}
    height={text('Height', '80%')}
    margin={text('Margin', '')}
    maxHeight={text('Max Height', '')}
    maxWidth={text('Max Width', '')}
    minHeight={text('Min Height', '')}
    minWidth={text('Min Width', '')}
    overflow={text('Overflow', '')}
    overflowX={text('Overflow', '')}
    overflowY={text('Overflow', '')}
    padding={text('Padding', '40px')}
    width={text('Width', '20%')}
  >
    Box
  </Box>
)
