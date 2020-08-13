import React from 'react'
import { shallow } from 'enzyme'

import Tag, { StyledTag } from '.'

describe('Tag', () => {
  it('renders correctly', () => {
    const test = shallow(<Tag>Test</Tag>)
    expect(test).toMatchSnapshot()
  })

  it('renders as <div> by default', () => {
    const test = shallow(<Tag />)
    const test2 = shallow(<StyledTag />)
    expect(test.type()).toEqual(StyledTag)
    expect(test2.type()).toEqual('span')
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

  it('respects the text prop', () => {
    const testProp = 'Tag'
    const test = shallow(<Tag text={testProp} />)
    expect(test.prop('text')).toBe(testProp)
  })
})
