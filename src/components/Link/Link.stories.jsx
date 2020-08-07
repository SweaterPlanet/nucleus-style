import React from 'react'
import { action } from '@storybook/addon-actions'
import {
  withKnobs,
  boolean,
  number,
  select,
  text,
} from '@storybook/addon-knobs/react'
import Flex from '../Flex'
import Link from './index'

export default {
  title: 'Link',
  component: Link,
  decorators: [withKnobs],
}

const boldLabel = 'bold'
const boldDefault = false

const buttonLabel = 'button'
const buttonDefault = false

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
const colorDefault = 'black'

const hrefLabel = 'href'

const opacityLabel = 'opacity'
const opacityDefault = '1'

const textLabel = 'text'
const textDefault = 'Link'
const xsDefault = 'XSmall'
const smDefault = 'Small'
const mdDefault = 'Medium'
const lgDefault = 'Large'
const xlDefault = 'XLarge'

const onClickLabel = 'clicked'
const onMouseOverLabel = 'hovered'

export const All = () => (
  <>
    <Flex flexDirection="column">
      <Link
        size="xs"
        bold={boolean(boldLabel, boldDefault)}
        button={boolean(buttonLabel, buttonDefault)}
        color={select(colorLabel, colorOptions, colorDefault)}
        href={text(hrefLabel, '')}
        opacity={number(opacityLabel, opacityDefault)}
        onClick={action(onClickLabel)}
        onMouseOver={action(onMouseOverLabel)}
      >
        {text(textLabel, textDefault)}
      </Link>
      <Link
        size="sm"
        bold={boolean(boldLabel, boldDefault)}
        button={boolean(buttonLabel, buttonDefault)}
        color={select(colorLabel, colorOptions, colorDefault)}
        href={text(hrefLabel, '')}
        opacity={number(opacityLabel, opacityDefault)}
        onClick={action(onClickLabel)}
        onMouseOver={action(onMouseOverLabel)}
      >
        {text(textLabel, textDefault)}
      </Link>
      <Link
        size="md"
        bold={boolean(boldLabel, boldDefault)}
        button={boolean(buttonLabel, buttonDefault)}
        color={select(colorLabel, colorOptions, colorDefault)}
        href={text(hrefLabel, '')}
        opacity={number(opacityLabel, opacityDefault)}
        onClick={action(onClickLabel)}
        onMouseOver={action(onMouseOverLabel)}
      >
        {text(textLabel, textDefault)}
      </Link>
      <Link
        size="lg"
        bold={boolean(boldLabel, boldDefault)}
        button={boolean(buttonLabel, buttonDefault)}
        color={select(colorLabel, colorOptions, colorDefault)}
        href={text(hrefLabel, '')}
        opacity={number(opacityLabel, opacityDefault)}
        onClick={action(onClickLabel)}
        onMouseOver={action(onMouseOverLabel)}
      >
        {text(textLabel, textDefault)}
      </Link>
      <Link
        size="xl"
        bold={boolean(boldLabel, boldDefault)}
        button={boolean(buttonLabel, buttonDefault)}
        color={select(colorLabel, colorOptions, colorDefault)}
        href={text(hrefLabel, '')}
        opacity={number(opacityLabel, opacityDefault)}
        onClick={action(onClickLabel)}
        onMouseOver={action(onMouseOverLabel)}
      >
        {text(textLabel, textDefault)}
      </Link>
    </Flex>
  </>
)

export const XS = () => (
  <Link
    size="xs"
    bold={boolean(boldLabel, boldDefault)}
    button={boolean(buttonLabel, buttonDefault)}
    color={select(colorLabel, colorOptions, colorDefault)}
    href={text(hrefLabel, '')}
    opacity={number(opacityLabel, opacityDefault)}
    onClick={action(onClickLabel)}
    onMouseOver={action(onMouseOverLabel)}
  >
    {text(textLabel, xsDefault)}
  </Link>
)

export const SM = () => (
  <Link
    size="sm"
    bold={boolean(boldLabel, boldDefault)}
    button={boolean(buttonLabel, buttonDefault)}
    color={select(colorLabel, colorOptions, colorDefault)}
    href={text(hrefLabel, '')}
    opacity={number(opacityLabel, opacityDefault)}
    onClick={action(onClickLabel)}
    onMouseOver={action(onMouseOverLabel)}
  >
    {text(textLabel, smDefault)}
  </Link>
)

export const MD = () => (
  <Link
    size="md"
    bold={boolean(boldLabel, boldDefault)}
    button={boolean(buttonLabel, buttonDefault)}
    color={select(colorLabel, colorOptions, colorDefault)}
    href={text(hrefLabel, '')}
    opacity={number(opacityLabel, opacityDefault)}
    onClick={action(onClickLabel)}
    onMouseOver={action(onMouseOverLabel)}
  >
    {text(textLabel, mdDefault)}
  </Link>
)

export const LG = () => (
  <Link
    size="lg"
    bold={boolean(boldLabel, boldDefault)}
    button={boolean(buttonLabel, buttonDefault)}
    color={select(colorLabel, colorOptions, colorDefault)}
    href={text(hrefLabel, '')}
    opacity={number(opacityLabel, opacityDefault)}
    onClick={action(onClickLabel)}
    onMouseOver={action(onMouseOverLabel)}
  >
    {text(textLabel, lgDefault)}
  </Link>
)

export const XL = () => (
  <Link
    size="xl"
    bold={boolean(boldLabel, boldDefault)}
    button={boolean(buttonLabel, buttonDefault)}
    color={select(colorLabel, colorOptions, colorDefault)}
    href={text(hrefLabel, '')}
    opacity={number(opacityLabel, opacityDefault)}
    onClick={action(onClickLabel)}
    onMouseOver={action(onMouseOverLabel)}
  >
    {text(textLabel, xlDefault)}
  </Link>
)
