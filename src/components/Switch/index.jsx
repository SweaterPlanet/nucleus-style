import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../theme'

const Box = styled.div`
  width: auto;
  height: auto;
  margin: 0 auto;
  position: relative;
`

const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 4em;
  height: 2em;
  border-radius: 4em;
  background: ${theme.colors.paper.dark};
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 1.4em;
    height: 1.4em;
    margin: 0.3em 0.4em;
    background: ${theme.colors.white};
    transition: 0.4s;
  }
`

const Input = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 4em;
  width: 4em;
  height: 2em;

  &:checked + ${Label} {
    ${props =>
      props.color === 'aqua' &&
      `
      background: ${theme.colors.aqua.base};
    `}  

    ${props =>
      props.color === 'black' &&
      `
      background: ${theme.colors.black};
    `} 

    ${props =>
      props.color === 'blue' &&
      `
      background: ${theme.colors.blue.base};
    `}  

    ${props =>
      props.color === 'green' &&
      `
      background: ${theme.colors.green.base};
    `}

    ${props =>
      props.color === 'purple' &&
      `
      background: ${theme.colors.purple.base};
    `}

    ${props =>
      props.color === 'red' &&
      `
      background: ${theme.colors.red.base};
    `} 

    ${props =>
      props.color === 'slate' &&
      `
      background: ${theme.colors.slate.base};
    `} 

    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      transform: translateX(1.8em);
      transition: 0.3s;
    }
  }
`

function Switch(props) {
  return (
    <>
      <Box>
        <Input
          color={props.color}
          id={props.id}
          type="checkbox"
          checked={props.checked}
          onChange={props.onChange}
        />
        <Label htmlFor={props.id} />
      </Box>
    </>
  )
}

Switch.propTypes = {
  color: PropTypes.oneOf([
    'aqua',
    'black',
    'blue',
    'green',
    'purple',
    'red',
    'slate',
  ]),
  id: PropTypes.string.isRequired,
}

Switch.defaultProps = {
  color: 'blue',
}

export default Switch
