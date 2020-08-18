import React from 'react'
import { shallow } from 'enzyme'

import Flex from '.'

describe('Flex', () => {
  it('renders correctly', () => {
    const test = shallow(<Flex>Test</Flex>)
    expect(test).toMatchSnapshot()
  })

  it('respects the alignContent prop', () => {
    const testProp = 'center'
    const test = shallow(<Flex alignContent={testProp} />)
    expect(test.prop('alignContent')).toBe(testProp)
  })

  it('respects the alignItems prop', () => {
    const testProp = 'center'
    const test = shallow(<Flex alignItems={testProp} />)
    expect(test.prop('alignItems')).toBe(testProp)
  })

  it('respects the alignSelf prop', () => {
    const testProp = 'center'
    const test = shallow(<Flex alignSelf={testProp} />)
    expect(test.prop('alignSelf')).toBe(testProp)
  })

  it('respects the background-color prop', () => {
    const testProp = 'aqua'
    const test = shallow(<Flex bg={testProp} />)
    expect(test.prop('bg')).toBe(testProp)
  })

  it('respects the color prop', () => {
    const testProp = 'aqua'
    const test = shallow(<Flex color={testProp} />)
    expect(test.prop('color')).toBe(testProp)
  })

  it('respects the cursor prop', () => {
    const testProp = 'pointer'
    const test = shallow(<Flex cursor={testProp} />)
    expect(test.prop('cursor')).toBe(testProp)
  })

  it('respects the display prop', () => {
    const testProp = 'flex'
    const test = shallow(<Flex display={testProp} />)
    expect(test.prop('display')).toBe(testProp)
  })

  it('respects the flex prop', () => {
    const testProp = '1 2 auto'
    const test = shallow(<Flex flex={testProp} />)
    expect(test.prop('flex')).toBe(testProp)
  })

  it('respects the flexBasis prop', () => {
    const testProp = '80px'
    const test = shallow(<Flex flexBasis={testProp} />)
    expect(test.prop('flexBasis')).toBe(testProp)
  })

  it('respects the flexDirection prop', () => {
    const testProp = 'row-reverse'
    const test = shallow(<Flex flexDirection={testProp} />)
    expect(test.prop('flexDirection')).toBe(testProp)
  })

  it('respects the flexGrow prop', () => {
    const testProp = 3
    const test = shallow(<Flex flexGrow={testProp} />)
    expect(test.prop('flexGrow')).toBe(testProp)
  })

  it('respects the flexShrink prop', () => {
    const testProp = 3
    const test = shallow(<Flex flexShrink={testProp} />)
    expect(test.prop('flexShrink')).toBe(testProp)
  })

  it('respects the flexWrap prop', () => {
    const testProp = 'wrap'
    const test = shallow(<Flex flexWrap={testProp} />)
    expect(test.prop('flexWrap')).toBe(testProp)
  })

  it('respects the height prop', () => {
    const testProp = '40%'
    const test = shallow(<Flex height={testProp} />)
    expect(test.prop('height')).toBe(testProp)
  })

  it('respects the justifyContent prop', () => {
    const testProp = 'center'
    const test = shallow(<Flex justifyContent={testProp} />)
    expect(test.prop('justifyContent')).toBe(testProp)
  })

  it('respects the justifyItems prop', () => {
    const testProp = 'center'
    const test = shallow(<Flex justifyItems={testProp} />)
    expect(test.prop('justifyItems')).toBe(testProp)
  })

  it('respects the justifySelf prop', () => {
    const testProp = 'center'
    const test = shallow(<Flex justifySelf={testProp} />)
    expect(test.prop('justifySelf')).toBe(testProp)
  })

  it('respects the margin prop', () => {
    const testProp = '4px 8px 12px 16px'
    const test = shallow(<Flex margin={testProp} />)
    expect(test.prop('margin')).toBe(testProp)
  })

  it('respects the maxHeight prop', () => {
    const testProp = '100%'
    const test = shallow(<Flex maxHeight={testProp} />)
    expect(test.prop('maxHeight')).toBe(testProp)
  })

  it('respects the maxWidth prop', () => {
    const testProp = '100%'
    const test = shallow(<Flex maxWidth={testProp} />)
    expect(test.prop('maxWidth')).toBe(testProp)
  })

  it('respects the minHeight prop', () => {
    const testProp = '100%'
    const test = shallow(<Flex minHeight={testProp} />)
    expect(test.prop('minHeight')).toBe(testProp)
  })

  it('respects the minWidth prop', () => {
    const testProp = '100%'
    const test = shallow(<Flex minWidth={testProp} />)
    expect(test.prop('minWidth')).toBe(testProp)
  })

  it('respects the order prop', () => {
    const testProp = 3
    const test = shallow(<Flex order={testProp} />)
    expect(test.prop('order')).toBe(testProp)
  })

  it('respects the overflow prop', () => {
    const testProp = 'hidden'
    const test = shallow(<Flex overflow={testProp} />)
    expect(test.prop('overflow')).toBe(testProp)
  })

  it('respects the padding prop', () => {
    const testProp = '4px 8px 12px 16px'
    const test = shallow(<Flex padding={testProp} />)
    expect(test.prop('padding')).toBe(testProp)
  })

  it('respects the width prop', () => {
    const testProp = '40%'
    const test = shallow(<Flex width={testProp} />)
    expect(test.prop('width')).toBe(testProp)
  })
})
