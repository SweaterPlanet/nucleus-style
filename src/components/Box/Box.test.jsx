import React from 'react'
import { shallow } from 'enzyme'

import Box, { StyledBox } from '.'

describe('Box', () => {
  it('renders correctly', () => {
    const test = shallow(<Box>Test</Box>)
    expect(test).toMatchSnapshot()
  })

  it('renders as <div> by default', () => {
    const test = shallow(<Box />)
    const test2 = shallow(<StyledBox />)
    expect(test.type()).toEqual(StyledBox)
    expect(test2.type()).toEqual('div')
  })

  it('respects the background-color prop', () => {
    const testProp = 'aqua'
    const test = shallow(<Box bg={testProp} />)
    expect(test.prop('bg')).toBe(testProp)
  })

  it('respects the color prop', () => {
    const testProp = 'aqua'
    const test = shallow(<Box color={testProp} />)
    expect(test.prop('color')).toBe(testProp)
  })

  it('respects the cursor prop', () => {
    const testProp = 'pointer'
    const test = shallow(<Box cursor={testProp} />)
    expect(test.prop('cursor')).toBe(testProp)
  })

  it('respects the display prop', () => {
    const testProp = 'flex'
    const test = shallow(<Box display={testProp} />)
    expect(test.prop('display')).toBe(testProp)
  })

  it('respects the height prop', () => {
    const testProp = '40%'
    const test = shallow(<Box height={testProp} />)
    expect(test.prop('height')).toBe(testProp)
  })

  it('respects the margin prop', () => {
    const testProp = '4px 8px 12px 16px'
    const test = shallow(<Box margin={testProp} />)
    expect(test.prop('margin')).toBe(testProp)
  })

  it('respects the maxHeight prop', () => {
    const testProp = '100%'
    const test = shallow(<Box maxHeight={testProp} />)
    expect(test.prop('maxHeight')).toBe(testProp)
  })

  it('respects the maxWidth prop', () => {
    const testProp = '100%'
    const test = shallow(<Box maxWidth={testProp} />)
    expect(test.prop('maxWidth')).toBe(testProp)
  })

  it('respects the minHeight prop', () => {
    const testProp = '100%'
    const test = shallow(<Box minHeight={testProp} />)
    expect(test.prop('minHeight')).toBe(testProp)
  })

  it('respects the minWidth prop', () => {
    const testProp = '100%'
    const test = shallow(<Box minWidth={testProp} />)
    expect(test.prop('minWidth')).toBe(testProp)
  })

  it('respects the overflow prop', () => {
    const testProp = 'hidden'
    const test = shallow(<Box overflow={testProp} />)
    expect(test.prop('overflow')).toBe(testProp)
  })

  it('respects the padding prop', () => {
    const testProp = '4px 8px 12px 16px'
    const test = shallow(<Box padding={testProp} />)
    expect(test.prop('padding')).toBe(testProp)
  })

  it('respects the width prop', () => {
    const testProp = '40%'
    const test = shallow(<Box width={testProp} />)
    expect(test.prop('width')).toBe(testProp)
  })
})
