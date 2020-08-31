import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean } from '@storybook/addon-knobs/react'
import QuestionMark from './index'

export default {
  title: 'QuestionMark',
  component: QuestionMark,
  decorators: [withKnobs],
}

const onClickLabel = 'clicked'
const onMouseOverLabel = 'hovered'

export function Default() {
  return (
    <QuestionMark
      dark={boolean('dark', false)}
      onClick={action(onClickLabel)}
      onMouseOver={action(onMouseOverLabel)}
    />
  )
}
