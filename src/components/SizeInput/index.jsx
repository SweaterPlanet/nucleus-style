import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../theme'

import Box from '../Box'
import Flex from '../Flex'
import Text from '../Text'

const Wrapper = styled(Flex)`
  float: left;
  margin-right: 10px;
`

const InputBox = styled(Flex)`
  width: 72px;
  height: 36px;
  background-color: ${theme.colors.paper.dark};
  margin: 0 auto;
  position: relative;
  direction: row;
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
`

const Input = styled.input`
  font-family: ${theme.fonts.body};
  font-size: 16px;
  font-weight: bold;
  border: 0;
  outline: 0;
  background: transparent;
  text-align: center;
  border-bottom: 1px solid ${theme.colors.slate.base};
  width: 20px;
  height: 16px;
  margin: 8px;
  margin-right: 8px;

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
          <InputBox>
            <Label bold>{props.label}</Label>
            <Input type="number" placeholder={props.placeholder} />
          </InputBox>
          <Box>
            <Caption red={props.red}>{props.stock} in stock</Caption>
          </Box>
        </Wrapper>
      </>
    )
  }

  return (
    <>
      <Wrapper flexDirection="column">
        <InputBox>
          <Label bold>{props.label}</Label>
          <Input type="number" placeholder={props.placeholder} />
        </InputBox>
      </Wrapper>
    </>
  )
}

SizeInput.propTypes = {
  label: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  placeholder: PropTypes.number,
  red: PropTypes.bool,
  stock: PropTypes.number,
}

SizeInput.defaultProps = {
  placeholder: 0,
  red: false,
}

export default SizeInput
