import React from 'react'
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
    background: ${theme.colors.aqua.base};

    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      transform: translateX(1.8em);
      transition: 0.3s;
    }
  }
`

const Switch = () => {
  return (
    <>
      <Box>
        <Input id="checkbox" type="checkbox" />
        <Label htmlFor="checkbox" />
      </Box>
    </>
  )
}

export default Switch
