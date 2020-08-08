import React from 'react'
import { shallow } from 'enzyme'

import Avatar from '.'

describe('Avatar', () => {
  it('renders correctly', () => {
    const test = shallow(<Avatar />)
    expect(test).toMatchSnapshot()
  })

  it('respects the background-color prop', () => {
    const testProp = '#000000'
    const test = shallow(<Avatar bg={testProp} />)
    expect(test.prop('bg')).toBe(testProp)
  })

  it('respects the color prop', () => {
    const testProp = '#000000'
    const test = shallow(<Avatar color={testProp} />)
    expect(test.prop('color')).toBe(testProp)
  })

  it('respects the initials prop', () => {
    const testProp = 'AB'
    const test = shallow(<Avatar initials={testProp} />)
    expect(test.prop('initials')).toBe(testProp)
  })
})
