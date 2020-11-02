import React from 'react'
import { mount, shallow } from 'enzyme'

import SizeInput from '.'

describe('SizeInput', () => {
  it('renders correctly', () => {
    const test = shallow(<SizeInput />)
    expect(test).toMatchSnapshot()
  })

  it('respects the dark prop', () => {
    const testProp = true
    const test = mount(<SizeInput dark={testProp} />)
    expect(test.prop('dark')).toBe(true)
  })

  it('respects the disabled prop', () => {
    const testProp = true
    const test = mount(<SizeInput disabled={testProp} />)
    expect(test.prop('disabled')).toBe(true)
  })

  it('respects the label prop', () => {
    const testProp = 'xs'
    const test = mount(<SizeInput label={testProp} />)
    expect(test.prop('label')).toBe(testProp)
  })

  it('respects the placeholder prop', () => {
    const testProp = 3
    const test = mount(<SizeInput placeholder={testProp} />)
    expect(test.prop('placeholder')).toBe(testProp)
  })

  it('respects the red prop', () => {
    const testProp = true
    const test = mount(<SizeInput red={testProp} />)
    expect(test.prop('red')).toBe(true)
  })

  it('respects the stock prop', () => {
    const testProp = 4
    const test = mount(<SizeInput stock={testProp} />)
    expect(test.prop('stock')).toBe(testProp)
  })
})
