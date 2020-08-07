import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../theme'

export const StyledLink = styled.a`
  font-family: ${theme.fonts.header};
  font-weight: ${props => (props.bold ? 600 : 400)};
  opacity: ${props => props.opacity};
  padding: 0;
  text-align: left;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;

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
    props.color === 'aqua' &&
    `
      color: ${theme.colors.aqua.base};

      &:hover {
        color: ${theme.colors.aqua.light};
      }
    `}  

  ${props =>
    props.color === 'black' &&
    `
      color: ${theme.colors.black};

      &:hover {
        color: ${theme.colors.slate.base};
      }
    `} 


  ${props =>
    props.color === 'blue' &&
    `
      color: ${theme.colors.blue.base};

      &:hover {
        color: ${theme.colors.blue.light};
      }
    `}  

  ${props =>
    props.color === 'green' &&
    `
      color: ${theme.colors.green.base};

      &:hover {
        color: ${theme.colors.green.light};
      }
    `}

  ${props =>
    props.color === 'paper' &&
    `
      color: ${theme.colors.paper.base};

      &:hover {
        color: ${theme.colors.paper.light};
      }
    `} 

  ${props =>
    props.color === 'purple' &&
    `
      color: ${theme.colors.purple.base};

      &:hover {
        color: ${theme.colors.purple.light};
      }
    `}

  ${props =>
    props.color === 'red' &&
    `
      color: ${theme.colors.red.base};

      &:hover {
        color: ${theme.colors.red.light};
      }
    `} 

  ${props =>
    props.color === 'slate' &&
    `
      color: ${theme.colors.slate.base};

      &:hover {
        color: ${theme.colors.slate.light};
      }
    `} 

  ${props =>
    props.color === 'white' &&
    `
      color: ${theme.colors.white};

      &:hover {
        color: ${theme.colors.paper.base};
      }
    `} 
`

function Link(props) {
  const button = props.button

  if (button) {
    return (
      <StyledLink as="button" href={props.href} {...props}>
        {props.children}
      </StyledLink>
    )
  }

  return (
    <StyledLink href={props.href} {...props}>
      {props.children}
    </StyledLink>
  )
}

Link.propTypes = {
  bold: PropTypes.bool,
  button: PropTypes.bool,
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
  href: PropTypes.string,
  opacity: PropTypes.number,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
}

Link.defaultProps = {
  bold: false,
  button: false,
  color: 'black',
  opacity: 1,
  size: 'md',
}

export default Link
