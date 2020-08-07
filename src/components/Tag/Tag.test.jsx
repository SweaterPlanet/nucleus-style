import React from 'react'
import { shallow } from 'enzyme'

import Tag from '.'

describe('Tag', () => {
  it('renders correctly', () => {
    const test = shallow(<Tag>Test</Tag>)
    expect(test).toMatchSnapshot()
  })

  it('renders as <span> by default', () => {
    const test = shallow(<Tag />)
    expect(test.type()).toEqual('span')
  })

  it('renders as color: black by default', () => {
    const test = shallow(<Tag />)
    expect(test.prop('color')).toBe('#000000')
  })

  it('renders as size: xs by default', () => {
    const test = shallow(<Tag />)
    expect(test.prop('size')).toBe('xs')
  })

  it('respects the color prop', () => {
    const testProp = '#4DA2E5'
    const test = shallow(<Tag color={testProp} />)
    expect(test.prop('color')).toBe(testProp)
  })

  it('respects the size prop', () => {
    const testProp = 'sm'
    const test = shallow(<Tag size={testProp} />)
    expect(test.prop('size')).toBe(testProp)
  })
})
