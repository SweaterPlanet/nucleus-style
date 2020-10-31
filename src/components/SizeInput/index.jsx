import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import theme from '../../theme'

import Box from '../Box'
import Flex from '../Flex'

const Wrapper = styled(Flex)`
  float: left;
  margin-right: 10px;
`

const InputBox = styled(Flex)`
  width: min-content;
  height: 36px;
  background-color: ${props =>
    props.dark ? `${theme.colors.slate.light}` : `${theme.colors.paper.dark}`};
  margin: 0 auto;
  position: relative;
  direction: row;

  ${props =>
    props.disabled &&
    css`
      background-color: ${props =>
        props.dark
          ? `${theme.colors.slate.base}`
          : `${theme.colors.paper.base}`};
    `}
`

const Label = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 10px;
  font-weight: bold;
  padding: 3px;
  padding-left: 12px;
  color: ${theme.colors.slate.base};
  text-align: left;
  text-transform: uppercase;

  ${props =>
    props.dark &&
    `
     color: ${theme.colors.paper.base};
  `}

  ${props =>
    props.disabled &&
    `
     opacity: 50%;
  `}
`

const Input = styled.input`
  font-family: ${theme.fonts.body};
  font-size: 16px;
  font-weight: bold;
  border: 0;
  outline: 0;
  background: transparent;
  text-align: center;
  color: ${theme.colors.slate.base};
  border-bottom: 1px solid ${theme.colors.slate.base};
  width: 20px;
  height: 16px;
  margin: 8px;
  margin-right: 8px;

  :disabled {
    opacity: 50%;
    pointer-events: none;
  }

  /* Hide number input errors */
  -moz-appearance: textfield;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Placeholder styles */
  ::placeholder {
    color: ${theme.colors.slate.base};
    font-size: 16px;
    padding: 0;
    margin: 0;
  }

  :focus::placeholder {
    color: transparent;
  }

  ::-webkit-input-placeholder {
    color: ${theme.colors.slate.base};
    font-size: 16px;
    padding: 0;
    margin: 0;
  }

  :-ms-input-placeholder {
    color: ${theme.colors.slate.base};
    font-size: 16px;
    padding: 0;
    margin: 0;
  }

  ${props =>
    props.dark &&
    `
    color: ${theme.colors.paper.base};
    border-bottom: 1px solid ${theme.colors.paper.base};

    ::placeholder {
      color: ${theme.colors.paper.base};
    }
  `}
`

const Caption = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 12px;
  color: ${theme.colors.slate.base};
  text-align: left;
  margin-top: 4px;

  ${props =>
    props.red &&
    `
      color: ${theme.colors.red.base};
    `}
`

function SizeInput(props) {
  if (props.stock) {
    return (
      <>
        <Wrapper flexDirection="column">
          <InputBox dark={props.dark} disabled={props.disabled}>
            <Label dark={props.dark} disabled={props.disabled}>
              {props.label}
            </Label>
            <Input
              dark={props.dark}
              disabled={props.disabled}
              onChange={props.onChange}
              type="number"
              placeholder={props.placeholder}
            />
          </InputBox>
          <Box>
            <Caption dark={props.dark} red={props.red}>
              {props.stock} in stock
            </Caption>
          </Box>
        </Wrapper>
      </>
    )
  }

  return (
    <>
      <Wrapper flexDirection="column">
        <InputBox dark={props.dark} disabled={props.disabled}>
          <Label dark={props.dark} disabled={props.disabled}>
            {props.label}
          </Label>
          <Input
            dark={props.dark}
            disabled={props.disabled}
            onChange={props.onChange}
            type="number"
            placeholder={props.placeholder}
          />
        </InputBox>
      </Wrapper>
    </>
  )
}

SizeInput.propTypes = {
  dark: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.number,
  red: PropTypes.bool,
  stock: PropTypes.number,
}

SizeInput.defaultProps = {
  dark: false,
  disabled: false,
  placeholder: 0,
  red: false,
}

export default SizeInput
