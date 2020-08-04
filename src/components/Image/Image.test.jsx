import React from 'react'
import { shallow } from 'enzyme'

import Image from '.'

describe('Image', () => {
  it('renders correctly', () => {
    const test = shallow(<Image>Test</Image>)
    expect(test).toMatchSnapshot()
  })

  it('renders as <img> by default', () => {
    const test = shallow(<Image />)
    expect(test.prop('as')).toBe('img')
  })

  it('respects the background-color prop', () => {
    const testProp = 'aqua'
    const test = shallow(<Image bg={testProp} />)
    expect(test.prop('bg')).toBe(testProp)
  })

  it('respects the circle prop', () => {
    const test = shallow(<Image circle />)
    expect(test.prop('circle')).toBe(true)
  })

  it('respects the color prop', () => {
    const testProp = 'aqua'
    const test = shallow(<Image color={testProp} />)
    expect(test.prop('color')).toBe(testProp)
  })

  it('respects the display prop', () => {
    const testProp = 'flex'
    const test = shallow(<Image display={testProp} />)
    expect(test.prop('display')).toBe(testProp)
  })

  it('respects the height prop', () => {
    const testProp = '40%'
    const test = shallow(<Image height={testProp} />)
    expect(test.prop('height')).toBe(testProp)
  })

  it('respects the margin prop', () => {
    const testProp = '4px 8px 12px 16px'
    const test = shallow(<Image margin={testProp} />)
    expect(test.prop('margin')).toBe(testProp)
  })

  it('respects the maxHeight prop', () => {
    const testProp = '100%'
    const test = shallow(<Image maxHeight={testProp} />)
    expect(test.prop('maxHeight')).toBe(testProp)
  })

  it('respects the maxWidth prop', () => {
    const testProp = '100%'
    const test = shallow(<Image maxWidth={testProp} />)
    expect(test.prop('maxWidth')).toBe(testProp)
  })

  it('respects the minHeight prop', () => {
    const testProp = '100%'
    const test = shallow(<Image minHeight={testProp} />)
    expect(test.prop('minHeight')).toBe(testProp)
  })

  it('respects the minWidth prop', () => {
    const testProp = '100%'
    const test = shallow(<Image minWidth={testProp} />)
    expect(test.prop('minWidth')).toBe(testProp)
  })

  it('respects the overflow prop', () => {
    const testProp = 'hidden'
    const test = shallow(<Image overflow={testProp} />)
    expect(test.prop('overflow')).toBe(testProp)
  })

  it('respects the padding prop', () => {
    const testProp = '4px 8px 12px 16px'
    const test = shallow(<Image padding={testProp} />)
    expect(test.prop('padding')).toBe(testProp)
  })

  it('respects the round prop', () => {
    const test = shallow(<Image round />)
    expect(test.prop('round')).toBe(true)
  })

  it('respects the width prop', () => {
    const testProp = '40%'
    const test = shallow(<Image width={testProp} />)
    expect(test.prop('width')).toBe(testProp)
  })
})
