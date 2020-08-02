import React from 'react'
import { H1, H2, H3 } from '/src'

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
}

function Heading(props) {
  const HeadingByElement = components[props.element]
  return <HeadingByElement />
}

export default Heading
