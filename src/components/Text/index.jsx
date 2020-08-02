import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../theme'

const StyledText = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 12px;
  font-weight: ${props => (props.bold ? 600 : 400)};
  opacity: ${props => props.opacity};
  
  ${props =>
    props.color === 'aqua' &&
    `
      color: ${theme.colors.aqua.base};
    `}  

  ${props =>
    props.color === 'black' &&
    `
      color: ${theme.colors.black};
    `} 


  ${props =>
    props.color === 'blue' &&
    `
      color: ${theme.colors.blue.base};
    `}  

  ${props =>
    props.color === 'green' &&
    `
      color: ${theme.colors.green.base};
    `}

  ${props =>
    props.color === 'paper' &&
    `
      color: ${theme.colors.paper.base};
    `} 

  ${props =>
    props.color === 'purple' &&
    `
      color: ${theme.colors.purple.base};
    `}

  ${props =>
    props.color === 'red' &&
    `
      color: ${theme.colors.red.base};
    `} 

  ${props =>
    props.color === 'slate' &&
    `
      color: ${theme.colors.slate.base};
    `} 
  
  ${props =>
    props.color === 'white' &&
    `
      color: ${theme.colors.white};
    `} 

  @media (min-width: ${theme.screens.sm}) {
    font-size: 13px;
  }

  @media (min-width: ${theme.screens.md}) {
    font-size: 13px;
  }

  @media (min-width: ${theme.screens.lg}) {
    font-size: 13px;
  }

  @media (min-width: ${theme.screens.xl}) {
    font-size: 15px;
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
