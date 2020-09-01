import React from 'react'
import { mount, shallow } from 'enzyme'

import QuestionMark from '.'

describe('QuestionMark', () => {
  it('renders correctly', () => {
    const test = shallow(<QuestionMark />)
    expect(test).toMatchSnapshot()
  })

  it('respects the dark prop', () => {
    const test = mount(<QuestionMark dark />)
    expect(test.prop('dark')).toBe(true)
  })
})
