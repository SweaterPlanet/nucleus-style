import React from 'react'
import { shallow } from 'enzyme'

import Heading from '.'

describe('Heading', () => {
  const headingElements = ['h1', 'h2', 'h3', 'h4']

  it('renders correctly', () => {
    const test = shallow(<Heading element="h1">Test</Heading>)
    expect(test).toMatchSnapshot()
  })

  headingElements.map(element => {
    it(`renders as ${element}`, () => {
      const test = shallow(<Heading element={element}>Test</Heading>)

      expect(test).toMatchSnapshot()
    })
  })

  it('respects the color prop', () => {
    const testProp = 'aqua'
    const test = shallow(<Heading element="h1" color={testProp} />)
    expect(test.prop('color')).toBe(testProp)
  })

  it('respects the opacity prop', () => {
    const testProp = 0.5
    const test = shallow(<Heading element="h1" opacity={testProp} />)
    expect(test.prop('opacity')).toBe(testProp)
  })
})
