import React from 'react'
import { H1, H2 } from '/src'

const components = {
  h1: H1,
  h2: H2,
}

function Heading(props) {
  const HeadingByElement = components[props.element]
  return <HeadingByElement />
}

export default Heading
