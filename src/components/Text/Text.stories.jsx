import React from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs/react'
import Text from './index'

export default {
  title: 'Text',
  component: Text,
  decorators: [withKnobs],
}

export const Default = () => <Text bold={boolean('Bold', false)}>Text</Text>
