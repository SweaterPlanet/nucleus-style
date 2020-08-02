import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../../../theme'

const H3 = styled.h3`
  font-family: ${theme.fonts.header};
  font-size: 16px;
  font-weight: 400;
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
    font-size: 18px;
  }

  @media (min-width: ${theme.screens.md}) {
    font-size: 20px;
  }

  @media (min-width: ${theme.screens.lg}) {
    font-size: 25px;
  }

  @media (min-width: ${theme.screens.xl}) {
    font-size: 30px;
  }
`

H3.propTypes = {
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

H3.defaultProps = {
  color: 'black',
  opacity: 1,
}

export default H3
