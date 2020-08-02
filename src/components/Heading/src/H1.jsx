import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../../../theme'

const H1 = styled.h1`
  font-family: ${theme.fonts.header};
  font-size: 35px;
  font-weight: 600;
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
    font-size: 40px;
  }

  @media (min-width: ${theme.screens.md}) {
    font-size: 50px;
  }

  @media (min-width: ${theme.screens.lg}) {
    font-size: 65px;
  }

  @media (min-width: ${theme.screens.xl}) {
    font-size: 80px;
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
