import React from 'react'
import { mount, shallow } from 'enzyme'

import Switch from '.'

describe('Switch', () => {
  it('renders correctly', () => {
    const test = shallow(<Switch />)
    expect(test).toMatchSnapshot()
  })

  it('respects the color prop', () => {
    const testProp = 'aqua'
    const test = mount(<Switch color={testProp} />)
    expect(test.prop('color')).toBe(testProp)
  })

  it('respects the id prop', () => {
    const testProp = 'checkbox'
    const test = mount(<Switch id={testProp} />)
    expect(test.prop('id')).toBe(testProp)
  })
})
