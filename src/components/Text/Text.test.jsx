import React from 'react'
import { shallow } from 'enzyme'

import Text, { StyledText } from '.'

describe('Text', () => {
  it('renders correctly', () => {
    const test = shallow(<Text>Test</Text>)
    expect(test).toMatchSnapshot()
  })

  it('respects the bold prop', () => {
    const test = shallow(<Text bold />)
    expect(test.find(StyledText).prop('bold')).toBe(true)
  })

  it('respects the color prop', () => {
    const testProp = 'aqua'
    const test = shallow(<Text color={testProp} />)
    expect(test.find(StyledText).prop('color')).toBe(testProp)
  })

  it('respects the opacity prop', () => {
    const testProp = 0.5
    const test = shallow(<Text opacity={testProp} />)
    expect(test.find(StyledText).prop('opacity')).toBe(testProp)
  })
})
