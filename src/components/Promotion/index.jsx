import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../theme'

import Box from '../Box'
import Text from '../Text'

const StyledPromotion = styled(Box)`
  background-color: ${props => props.bg};
  overflow: hidden;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 0.8em 1.2em;
`

const StyledText = styled(Text)`
  color: ${props => props.color};
  text-align: center;
  text-decoration: ${props => props.underline && `underline`};
  display: inline-block;
  margin: 0;
`

const Close = styled.button`
  float: right;
  position: relative;
  align-items: center;
  justify-content: center;
`

function Promotion(props) {
  return (
    <StyledPromotion bg={props.bg}>
      <StyledText color={props.color} {...props}>
        {props.children}
      </StyledText>
      <Close>x</Close>
    </StyledPromotion>
  )
}

Promotion.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string,
  underline: PropTypes.bool,
  ...Box.propTypes,
}

Promotion.defaultProps = {
  ...Box.defaultProps,
  bg: '#000000',
  color: '#ffffff',
}

export default Promotion
