import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../theme'

const StyledButton = styled.button`
  font-family: ${theme.fonts.header};
  font-weight: 600;
  border: none;
  border-radius: 8px;
  padding: 0.4em 0.6em;
  opacity: ${props => props.opacity};
  cursor: pointer;

  ${props =>
    props.round &&
    `
    border-radius: 2em;
    padding: 0.4em 0.8em;
  `}

  ${props =>
    props.size === 'xs' &&
    `
    font-size: ${theme.fontSizes.p.xs}

    @media (min-width: ${theme.screens.sm}) {
      font-size: ${theme.fontSizes.p.sm}
    }

    @media (min-width: ${theme.screens.md}) {
      font-size: ${theme.fontSizes.p.md}
    }

    @media (min-width: ${theme.screens.lg}) {
      font-size: ${theme.fontSizes.p.lg}
    }

    @media (min-width: ${theme.screens.xl}) {
      font-size: ${theme.fontSizes.p.xl}
    }
  `}

  ${props =>
    props.size === 'sm' &&
    `
    font-size: ${theme.fontSizes.h4.xs}

    @media (min-width: ${theme.screens.sm}) {
      font-size: ${theme.fontSizes.h4.sm}
    }

    @media (min-width: ${theme.screens.md}) {
      font-size: ${theme.fontSizes.h4.md}
    }

    @media (min-width: ${theme.screens.lg}) {
      font-size: ${theme.fontSizes.h4.lg}
    }

    @media (min-width: ${theme.screens.xl}) {
      font-size: ${theme.fontSizes.h4.xl}
    }
  `}

${props =>
  props.size === 'md' &&
  `
    font-size: ${theme.fontSizes.h3.xs}

    @media (min-width: ${theme.screens.sm}) {
      font-size: ${theme.fontSizes.h3.sm}
    }

    @media (min-width: ${theme.screens.md}) {
      font-size: ${theme.fontSizes.h3.md}
    }

    @media (min-width: ${theme.screens.lg}) {
      font-size: ${theme.fontSizes.h3.lg}
    }

    @media (min-width: ${theme.screens.xl}) {
      font-size: ${theme.fontSizes.h3.xl}
    }
  `}

${props =>
  props.size === 'lg' &&
  `
    font-size: ${theme.fontSizes.h2.xs}

    @media (min-width: ${theme.screens.sm}) {
      font-size: ${theme.fontSizes.h2.sm}
    }

    @media (min-width: ${theme.screens.md}) {
      font-size: ${theme.fontSizes.h2.md}
    }

    @media (min-width: ${theme.screens.lg}) {
      font-size: ${theme.fontSizes.h2.lg}
    }

    @media (min-width: ${theme.screens.xl}) {
      font-size: ${theme.fontSizes.h2.xl}
    }
  `}

${props =>
  props.size === 'xl' &&
  `
    font-size: ${theme.fontSizes.h1.xs}

    @media (min-width: ${theme.screens.sm}) {
      font-size: ${theme.fontSizes.h1.sm}
    }

    @media (min-width: ${theme.screens.md}) {
      font-size: ${theme.fontSizes.h1.md}
    }

    @media (min-width: ${theme.screens.lg}) {
      font-size: ${theme.fontSizes.h1.lg}
    }

    @media (min-width: ${theme.screens.xl}) {
      font-size: ${theme.fontSizes.h1.xl}
    }
  `}

  ${props =>
    props.maxWidth &&
    `
    width: 100%;
  `}

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

      &:hover {
        background-color: ${theme.colors.aqua.light};
      }
    `}  

  ${props =>
    props.bg === 'black' &&
    `
      background-color: ${theme.colors.black};

      &:hover {
        background-color: ${theme.colors.slate.base};
      }
    `} 


  ${props =>
    props.bg === 'blue' &&
    `
      background-color: ${theme.colors.blue.base};

      &:hover {
        background-color: ${theme.colors.blue.light};
      }
    `}  

  ${props =>
    props.bg === 'green' &&
    `
      background-color: ${theme.colors.green.base};

      &:hover {
        background-color: ${theme.colors.green.light};
      }
    `}

  ${props =>
    props.bg === 'paper' &&
    `
      background-color: ${theme.colors.paper.base};

      &:hover {
        background-color: ${theme.colors.paper.light};
      }
    `} 

  ${props =>
    props.bg === 'purple' &&
    `
      background-color: ${theme.colors.purple.base};

      &:hover {
        background-color: ${theme.colors.purple.light};
      }
    `}

  ${props =>
    props.bg === 'red' &&
    `
      background-color: ${theme.colors.red.base};

      &:hover {
        background-color: ${theme.colors.red.light};
      }
    `} 

  ${props =>
    props.bg === 'slate' &&
    `
      background-color: ${theme.colors.slate.base};

      &:hover {
        background-color: ${theme.colors.slate.light};
      }
    `} 

  ${props =>
    props.bg === 'white' &&
    `
      background-color: ${theme.colors.white};

      &:hover {
        background-color: ${theme.colors.paper.base};
      }
    `} 
`

function Button(props) {
  return (
    <StyledButton
      bg={props.bg}
      color={props.color}
      opacity={props.opacity}
      size={props.size}
      {...props}
    >
      {props.children}
    </StyledButton>
  )
}

Button.propTypes = {
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
  opacity: PropTypes.number,
  maxWidth: PropTypes.bool,
  round: PropTypes.bool,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
}

Button.defaultProps = {
  bg: 'paper',
  color: 'black',
  opacity: 1,
  round: false,
  maxWidth: false,
  size: 'md',
}

export default Button
