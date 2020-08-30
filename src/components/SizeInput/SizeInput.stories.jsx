import React from 'react'
import {
  withKnobs,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs/react'
import SizeInput from './index'

export default {
  title: 'SizeInput',
  component: SizeInput,
  decorators: [withKnobs],
}

const labelOptions = ['xs', 'sm', 'md', 'lg', 'xl']

export const Default = () => (
  <SizeInput
    dark={boolean('dark', false)}
    label={select('label', labelOptions, 'xs')}
    placeholder={number('placeholder', '0')}
    red={boolean('red', false)}
    stock={number('stock', '')}
  />
)

export const Dark = () => (
  <SizeInput
    dark={boolean('dark', true)}
    label={select('label', labelOptions, 'xs')}
    placeholder={number('placeholder', '0')}
    red={boolean('red', false)}
    stock={number('stock', '')}
  />
)

export const Group = () => (
  <>
    <SizeInput
      dark={boolean('dark', false)}
      label="xs"
      placeholder={number('placeholder', '0')}
      stock={number('stock', '')}
    />
    <SizeInput
      dark={boolean('dark', false)}
      label="sm"
      placeholder={number('placeholder', '0')}
      stock={number('stock', '')}
    />
    <SizeInput
      dark={boolean('dark', false)}
      label="md"
      placeholder={number('placeholder', '0')}
      stock={number('stock', '')}
    />
    <SizeInput
      dark={boolean('dark', false)}
      label="lg"
      placeholder={number('placeholder', '0')}
      stock={number('stock', '')}
    />
    <SizeInput
      dark={boolean('dark', false)}
      label="xl"
      placeholder={number('placeholder', '0')}
      stock={number('stock', '')}
    />
  </>
)

export const Caption = () => (
  <SizeInput
    dark={boolean('dark', false)}
    label={select('label', labelOptions, 'xs')}
    placeholder={number('placeholder', '0')}
    red={boolean('red', true)}
    stock={number('stock', '3')}
  />
)
