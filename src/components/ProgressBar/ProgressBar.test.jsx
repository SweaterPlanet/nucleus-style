import React from 'react'
import { mount, shallow } from 'enzyme'

import ProgressBar from '.'

describe('ProgressBar', () => {
  it('renders correctly', () => {
    const test = shallow(<ProgressBar />)
    expect(test).toMatchSnapshot()
  })

  it('respects the color prop', () => {
    const testProp = 'aqua'
    const test = mount(<ProgressBar color={testProp} />)
    expect(test.prop('color')).toBe(testProp)
  })

  it('respects the dark prop', () => {
    const test = mount(<ProgressBar dark />)
    expect(test.prop('dark')).toBe(true)
  })

  it('respects the value prop', () => {
    const testProp = 30
    const test = mount(<ProgressBar value={testProp} />)
    expect(test.prop('value')).toBe(testProp)
  })
})
