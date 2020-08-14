import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import theme from '../../theme'

export const StyledText = styled.p`
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.p.xs};
  font-weight: ${props => (props.bold ? 600 : 400)};
	margin: 0;
  opacity: ${props => props.opacity};
  
  ${props =>
    props.color === 'aqua' &&
    css`
      color: ${theme.colors.aqua.base};
    `}  

  ${props =>
    props.color === 'black' &&
    css`
      color: ${theme.colors.black};
    `} 


  ${props =>
    props.color === 'blue' &&
    css`
      color: ${theme.colors.blue.base};
    `}  

  ${props =>
    props.color === 'green' &&
    css`
      color: ${theme.colors.green.base};
    `}

  ${props =>
    props.color === 'paper' &&
    css`
      color: ${theme.colors.paper.base};
    `} 

  ${props =>
    props.color === 'purple' &&
    css`
      color: ${theme.colors.purple.base};
    `}

  ${props =>
    props.color === 'red' &&
    css`
      color: ${theme.colors.red.base};
    `} 

  ${props =>
    props.color === 'slate' &&
    css`
      color: ${theme.colors.slate.base};
    `} 
  
  ${props =>
    props.color === 'white' &&
    css`
      color: ${theme.colors.white};
    `} 

  @media (min-width: ${theme.screens.sm}) {
    font-size: ${theme.fontSizes.p.sm};
  }

  @media (min-width: ${theme.screens.md}) {
    font-size: ${theme.fontSizes.p.md};
  }

  @media (min-width: ${theme.screens.lg}) {
    font-size: ${theme.fontSizes.p.lg};
  }

  @media (min-width: ${theme.screens.xl}) {
    font-size: ${theme.fontSizes.p.xl};
  }
`

function Text(props) {
  return (
    <StyledText color={props.color} opacity={props.opacity} {...props}>
      {props.children}
    </StyledText>
  )
}

Text.propTypes = {
  bold: PropTypes.bool,
  color: PropTypes.oneOf([
    'aqua',
    'black',
    'blue',
    'green',
    'paper',
    'purple',
    'red',
    'slate',
    'white',
  ]),
  opacity: PropTypes.number,
}

Text.defaultProps = {
  bold: false,
  color: 'black',
  opacity: 1,
}

export default Text
