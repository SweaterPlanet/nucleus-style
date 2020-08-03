import React from 'react'
import { mount, shallow } from 'enzyme'

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

  it('respects the margin prop', () => {
    const testProp = '4px 8px 12px 16px'
    const test = shallow(<Box margin={testProp} />)
    expect(test.prop('margin')).toBe(testProp)
  })
})
