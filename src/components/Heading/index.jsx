import React from 'react'
import PropTypes from 'prop-types'
import { H1, H2, H3, H4 } from './src'

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
}

function Heading(props) {
  const HeadingByElement = components[props.element]
  return (
    <HeadingByElement color={props.color} opacity={props.opacity}>
      {props.children}
    </HeadingByElement>
  )
}

Heading.propTypes = {
  color: PropTypes.oneOf([
    'aqua',
    'black',
    'blue',
    'green',
    'paper',
    'purple',
    'red',
    'slate',
    'white',
  ]),
  element: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']),
  opacity: PropTypes.number,
}

Heading.defaultProps = {
  color: 'black',
  opacity: '1',
}

export default Heading
