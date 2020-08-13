import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, color, select, text } from '@storybook/addon-knobs/react'
import Tag from './index'

export default {
  title: 'Tag',
  component: Tag,
  decorators: [withKnobs],
}

const colorLabel = 'color'
const colorDefault = '#000000'

const sizeLabel = 'size'
const sizeOptions = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
}

const textLabel = 'text'

export const All = () => {
  return (
    <>
      <Tag
        size="xs"
        color={color(colorLabel, colorDefault)}
        text={text(textLabel, 'Tag')}
      />
      <Tag
        size="sm"
        color={color(colorLabel, colorDefault)}
        text={text(textLabel, 'Tag')}
      />
      <Tag
        size="md"
        color={color(colorLabel, colorDefault)}
        text={text(textLabel, 'Tag')}
      />
      <Tag
        size="lg"
        color={color(colorLabel, colorDefault)}
        text={text(textLabel, 'Tag')}
      />
      <Tag
        size="xl"
        color={color(colorLabel, colorDefault)}
        text={text(textLabel, 'Tag')}
      />
    </>
  )
}

export const Default = () => {
  return (
    <>
      <Tag
        color={color(colorLabel, colorDefault)}
        size={select(sizeLabel, sizeOptions)}
        text={text(textLabel, 'Tag')}
      />
    </>
  )
}

export const Example = () => {
  return (
    <>
      <Tag
        color={color(colorLabel, '#6CB01B')}
        size={select(sizeLabel, sizeOptions)}
        text={text(textLabel, '🌱 Environmental')}
      />
    </>
  )
}
