import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../theme'

export const StyledBox = styled.div`
  font-family: ${theme.fonts.body};

  /* layout */
  display: ${props => props.display || props.d};
  width: ${props => props.width || props.w};
  height: ${props => props.height || props.h};
  min-width: ${props => props.minWidth};
  min-height: ${props => props.minHeight};
  max-width: ${props => props.maxWidth};
  max-height: ${props => props.maxHeight};
  overflow: ${props => props.overflow};
  overflow-x: ${props => props.overflowX};
  overflow-y: ${props => props.overflowY};

  /* space */
  margin: ${props => props.margin || props.m};
  margin-top: ${props => props.marginTop || props.mt};
  margin-right: ${props => props.marginRight || props.mr};
  margin-bottom: ${props => props.marginBottom || props.mb};
  margin-left: ${props => props.marginLeft || props.ml};
  padding: ${props => props.padding || props.p};
  padding-top: ${props => props.paddingTop || props.pt};
  padding-right: ${props => props.paddingRight || props.pr};
  padding-bottom: ${props => props.paddingBottom || props.pb};
  padding-left: ${props => props.paddingLeft || props.pl};

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

  ${props =>
    props.bg === 'aqua' &&
    `
      background-color: ${theme.colors.aqua.base};
    `}  

  ${props =>
    props.bg === 'black' &&
    `
      background-color: ${theme.colors.black};
    `} 


  ${props =>
    props.bg === 'blue' &&
    `
      background-color: ${theme.colors.blue.base};
    `}  

  ${props =>
    props.bg === 'green' &&
    `
      background-color: ${theme.colors.green.base};
    `}

  ${props =>
    props.bg === 'paper' &&
    `
      background-color: ${theme.colors.paper.base};
    `} 

  ${props =>
    props.bg === 'purple' &&
    `
      background-color: ${theme.colors.purple.base};
    `}

  ${props =>
    props.bg === 'red' &&
    `
      background-color: ${theme.colors.red.base};
    `} 

  ${props =>
    props.bg === 'slate' &&
    `
      background-color: ${theme.colors.slate.base};
    `} 

  ${props =>
    props.bg === 'white' &&
    `
      background-color: ${theme.colors.white};
    `} 
`

function Box(props) {
  return <StyledBox {...props}>{props.children}</StyledBox>
}

Box.propTypes = {
  bg: PropTypes.oneOf([
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
  d: PropTypes.string,
  display: PropTypes.string,
  h: PropTypes.string,
  height: PropTypes.string,
  m: PropTypes.string,
  margin: PropTypes.string,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  marginTop: PropTypes.number,
  maxHeight: PropTypes.number,
  maxWidth: PropTypes.number,
  mb: PropTypes.number,
  minHeight: PropTypes.number,
  minWidth: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
  mt: PropTypes.number,
  overflow: PropTypes.number,
  overflowX: PropTypes.number,
  overflowY: PropTypes.number,
  p: PropTypes.number,
  padding: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingTop: PropTypes.number,
  pb: PropTypes.number,
  pl: PropTypes.number,
  pr: PropTypes.number,
  pt: PropTypes.number,
  w: PropTypes.number,
  width: PropTypes.number,
}

Box.defaultProps = {
  color: 'black',
}

export default Box
