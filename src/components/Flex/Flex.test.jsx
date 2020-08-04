import React from 'react'
import { shallow } from 'enzyme'

import Flex from '.'

describe('Flex', () => {
  it('renders correctly', () => {
    const test = shallow(<Flex>Test</Flex>)
    expect(test).toMatchSnapshot()
  })

  it('respects the background-color prop', () => {
    const testProp = 'aqua'
    const test = shallow(<Flex bg={testProp} />)
    expect(test.prop('bg')).toBe(testProp)
  })

  it('respects the color prop', () => {
    const testProp = 'aqua'
    const test = shallow(<Flex color={testProp} />)
    expect(test.prop('color')).toBe(testProp)
  })

  it('respects the display prop', () => {
    const testProp = 'flex'
    const test = shallow(<Flex display={testProp} />)
    expect(test.prop('display')).toBe(testProp)
  })

  it('respects the height prop', () => {
    const testProp = '40%'
    const test = shallow(<Flex height={testProp} />)
    expect(test.prop('height')).toBe(testProp)
  })

  it('respects the margin prop', () => {
    const testProp = '4px 8px 12px 16px'
    const test = shallow(<Flex margin={testProp} />)
    expect(test.prop('margin')).toBe(testProp)
  })

  it('respects the maxHeight prop', () => {
    const testProp = '100%'
    const test = shallow(<Flex maxHeight={testProp} />)
    expect(test.prop('maxHeight')).toBe(testProp)
  })

  it('respects the maxWidth prop', () => {
    const testProp = '100%'
    const test = shallow(<Flex maxWidth={testProp} />)
    expect(test.prop('maxWidth')).toBe(testProp)
  })

  it('respects the minHeight prop', () => {
    const testProp = '100%'
    const test = shallow(<Flex minHeight={testProp} />)
    expect(test.prop('minHeight')).toBe(testProp)
  })

  it('respects the minWidth prop', () => {
    const testProp = '100%'
    const test = shallow(<Flex minWidth={testProp} />)
    expect(test.prop('minWidth')).toBe(testProp)
  })

  it('respects the overflow prop', () => {
    const testProp = 'hidden'
    const test = shallow(<Flex overflow={testProp} />)
    expect(test.prop('overflow')).toBe(testProp)
  })

  it('respects the padding prop', () => {
    const testProp = '4px 8px 12px 16px'
    const test = shallow(<Flex padding={testProp} />)
    expect(test.prop('padding')).toBe(testProp)
  })

  it('respects the width prop', () => {
    const testProp = '40%'
    const test = shallow(<Flex width={testProp} />)
    expect(test.prop('width')).toBe(testProp)
  })
})
