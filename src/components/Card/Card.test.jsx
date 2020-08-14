import React from 'react'
import { mount, shallow } from 'enzyme'

import Card from '.'

describe('Card', () => {
  it('renders correctly', () => {
    const test = shallow(<Card>Test</Card>)
    expect(test).toMatchSnapshot()
  })

  it('respects the background-color prop', () => {
    const testProp = 'aqua'
    const test = shallow(<Card bg={testProp} />)
    expect(test.prop('bg')).toBe(testProp)
  })

  it('respects the border prop', () => {
    const testProp = '2px solid black'
    const test = shallow(<Card border={testProp} />)
    expect(test.prop('border')).toBe(testProp)
  })

  it('respects the color prop', () => {
    const testProp = 'aqua'
    const test = shallow(<Card color={testProp} />)
    expect(test.prop('color')).toBe(testProp)
  })

  it('respects the cursor prop', () => {
    const testProp = 'pointer'
    const test = shallow(<Card cursor={testProp} />)
    expect(test.prop('cursor')).toBe(testProp)
  })

  it('respects the display prop', () => {
    const testProp = 'flex'
    const test = shallow(<Card display={testProp} />)
    expect(test.prop('display')).toBe(testProp)
  })

  it('respects the height prop', () => {
    const testProp = '40%'
    const test = shallow(<Card height={testProp} />)
    expect(test.prop('height')).toBe(testProp)
  })

  it('respects the margin prop', () => {
    const testProp = '4px 8px 12px 16px'
    const test = shallow(<Card margin={testProp} />)
    expect(test.prop('margin')).toBe(testProp)
  })

  it('respects the maxHeight prop', () => {
    const testProp = '100%'
    const test = shallow(<Card maxHeight={testProp} />)
    expect(test.prop('maxHeight')).toBe(testProp)
  })

  it('respects the maxWidth prop', () => {
    const testProp = '100%'
    const test = shallow(<Card maxWidth={testProp} />)
    expect(test.prop('maxWidth')).toBe(testProp)
  })

  it('respects the minHeight prop', () => {
    const testProp = '100%'
    const test = shallow(<Card minHeight={testProp} />)
    expect(test.prop('minHeight')).toBe(testProp)
  })

  it('respects the minWidth prop', () => {
    const testProp = '100%'
    const test = shallow(<Card minWidth={testProp} />)
    expect(test.prop('minWidth')).toBe(testProp)
  })

  it('respects the outline prop', () => {
    const testProp = '2px solid black'
    const test = shallow(<Card outline={testProp} />)
    expect(test.prop('outline')).toBe(testProp)
  })

  it('respects the opacity prop', () => {
    const testProp = 0.5
    const test = shallow(<Card opacity={testProp} />)
    expect(test.prop('opacity')).toBe(testProp)
  })

  it('respects the overflow prop', () => {
    const testProp = 'hidden'
    const test = shallow(<Card overflow={testProp} />)
    expect(test.prop('overflow')).toBe(testProp)
  })

  it('respects the padding prop', () => {
    const testProp = '4px 8px 12px 16px'
    const test = shallow(<Card padding={testProp} />)
    expect(test.prop('padding')).toBe(testProp)
  })

  it('respects the round prop', () => {
    const test = shallow(<Card round />)
    expect(test.prop('round')).toBe(true)
  })

  it('respects the width prop', () => {
    const testProp = '40%'
    const test = shallow(<Card width={testProp} />)
    expect(test.prop('width')).toBe(testProp)
  })
})
