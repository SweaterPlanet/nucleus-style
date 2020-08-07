import React from 'react'
import { mount, shallow } from 'enzyme'

import Link, { StyledLink } from '.'

describe('Link', () => {
  it('renders correctly', () => {
    const test = shallow(<Link>Test</Link>)
    expect(test).toMatchSnapshot()
  })

  it('renders as <a> by default', () => {
    const test = shallow(<Link />)
    const test2 = shallow(<StyledLink />)
    expect(test.type()).toEqual(StyledLink)
    expect(test2.type()).toEqual('a')
  })

  it('renders as <button> with button prop', () => {
    const test = shallow(<Link button />)
    expect(test.prop('button')).toBeTruthy()
  })

  it('disables correctly', () => {
    const test = mount(<Link disabled />)
    expect(test.prop('disabled')).toBeTruthy()
  })

  it('respects the bold prop', () => {
    const test = shallow(<Link bold />)
    expect(test.prop('bold')).toBeTruthy()
  })

  it('respects the color prop', () => {
    const testProp = 'aqua'
    const test = shallow(<Link color={testProp} />)
    expect(test.prop('color')).toBe(testProp)
  })

  it('respects the opacity prop', () => {
    const testProp = 0.5
    const test = shallow(<Link opacity={testProp} />)
    expect(test.prop('opacity')).toBe(testProp)
  })
})
