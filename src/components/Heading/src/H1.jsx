import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../../../theme'

const H1 = styled.h1`
  font-family: ${theme.fonts.header};
  font-size: ${theme.fontSizes.h1.xs};
  font-weight: 600;
	margin: 0;
	background-color: lime;
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
    font-size: ${theme.fontSizes.h1.sm};
  }

  @media (min-width: ${theme.screens.md}) {
    font-size: ${theme.fontSizes.h1.md};
  }

  @media (min-width: ${theme.screens.lg}) {
    font-size: ${theme.fontSizes.h1.lg};
  }

  @media (min-width: ${theme.screens.xl}) {
    font-size: ${theme.fontSizes.h1.xl};
  }
`

H1.propTypes = {
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

H1.defaultProps = {
  color: 'black',
  opacity: 1,
}

export default H1
