import React from 'react'
import H1 from '/src'

const components = {
  h1: H1,
}

function Heading(props) {
  const HeadingByElement = components[props.element]
  return <HeadingByElement />
}

export default Heading
