import React from 'react'
import { mount, shallow } from 'enzyme'

import Button from '.'

describe('Button', () => {
  it('renders correctly', () => {
    const test = shallow(<Button>Test</Button>)
    expect(test).toMatchSnapshot()
  })

  it('disables correctly', () => {
    const test = mount(<Button disabled>Test</Button>)
    expect(test.prop('disabled')).toBeTruthy()
  })

  it('registers clicks', () => {
    const mockCallBack = jest.fn()

    const test = shallow(<Button onClick={mockCallBack}>Test</Button>)
    test.simulate('click')
    expect(mockCallBack.mock.calls.length).toEqual(1)
  })

  it('registers hovers', () => {
    const mockCallBack = jest.fn()

    const test = shallow(<Button onMouseOver={mockCallBack}>Test</Button>)
    test.simulate('mouseover')
    expect(mockCallBack.mock.calls.length).toEqual(1)
  })

  it('size renders as `md` by default', () => {
    const test = shallow(<Button>Test</Button>)
    expect(test.prop('size')).toBe('md')
  })

  it('respects the background-color prop', () => {
    const testProp = 'aqua'
    const test = shallow(<Button bg={testProp} />)
    expect(test.prop('bg')).toBe(testProp)
  })

  it('respects the color prop', () => {
    const testProp = 'aqua'
    const test = shallow(<Button color={testProp} />)
    expect(test.prop('color')).toBe(testProp)
  })

  it('respects the maxWidth prop', () => {
    const test = shallow(<Button maxWidth />)
    expect(test.prop('maxWidth')).toBe(true)
  })

  it('respects the opacity prop', () => {
    const testProp = 0.5
    const test = shallow(<Button opacity={testProp} />)
    expect(test.prop('opacity')).toBe(testProp)
  })

  it('respects the round prop', () => {
    const test = shallow(<Button round />)
    expect(test.prop('round')).toBe(true)
  })

  it('respects the size prop', () => {
    const testProp = 'sm'
    const test = shallow(<Button size={testProp} />)
    expect(test.prop('size')).toBe(testProp)
  })
})
