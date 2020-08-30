import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../theme'

import Flex from '../Flex'

const Box = styled(Flex)`
  width: 72px;
  height: 36px;
  background-color: ${theme.colors.paper.dark};
  margin: 0 auto;
  position: absolute;
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
  margin-left: 8px;

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

function SizeInput(props) {
  return (
    <Box>
      <Label bold>XS</Label>
      <Input type="number" placeholder="0" />
    </Box>
  )
}

export default SizeInput
