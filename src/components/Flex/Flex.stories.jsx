import React from 'react'
import { withKnobs, select, text } from '@storybook/addon-knobs/react'
import Flex from './index'

export default {
  title: 'Flex',
  component: Flex,
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
  <Flex
    alignContent={text('alignContent', '')}
    alignItems={text('alignItems', '')}
    alignSelf={text('alignSelf', '')}
    bg={select(bgLabel, bgOptions, 'paper')}
    color={select(colorLabel, colorOptions, 'black')}
    cursor={text('cursor', 'auto')}
    display={text('display', '')}
    flex={text('flex', '')}
    flexBasis={text('flexBasis', '')}
    flexDirection={text('flexDirection', '')}
    flexGrow={text('flexGrow', '')}
    flexShrink={text('flexShrink', '')}
    flexWrap={text('flexWrap', '')}
    height={text('height', '80%')}
    justifyContent={text('justifyContent', '')}
    justifyItems={text('justifyItems', '')}
    justifySelf={text('justifySelf', '')}
    margin={text('margin', '')}
    maxHeight={text('maxHeight', '')}
    maxWidth={text('maxWidth', '')}
    minHeight={text('minHeight', '')}
    minWidth={text('minWidth', '')}
    order={text('order', '')}
    overflow={text('overflow', '')}
    overflowX={text('overflowX', '')}
    overflowY={text('overflowY', '')}
    padding={text('padding', '40px')}
    width={text('width', '20%')}
  >
    Flex
  </Flex>
)
