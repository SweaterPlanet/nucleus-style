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

export const All = () => {
  return (
    <>
      <Tag size="xs" color={color(colorLabel, colorDefault)}>
        Tag
      </Tag>
      <Tag size="sm" color={color(colorLabel, colorDefault)}>
        Tag
      </Tag>
      <Tag size="md" color={color(colorLabel, colorDefault)}>
        Tag
      </Tag>
      <Tag size="lg" color={color(colorLabel, colorDefault)}>
        Tag
      </Tag>
      <Tag size="xl" color={color(colorLabel, colorDefault)}>
        Tag
      </Tag>
    </>
  )
}

export const Default = () => {
  return (
    <>
      <Tag
        color={color(colorLabel, colorDefault)}
        size={select(sizeLabel, sizeOptions)}
      >
        Tag
      </Tag>
    </>
  )
}

export const Example = () => {
  return (
    <>
      <Tag color="#6CB01B" size={select(sizeLabel, sizeOptions)}>
        🌱 Environmental
      </Tag>
      <Tag color="#2FA5FE" size={select(sizeLabel, sizeOptions)}>
        💎 Premium Line
      </Tag>
    </>
  )
}
