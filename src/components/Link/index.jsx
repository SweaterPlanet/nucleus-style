import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../theme'

const StyledLink = styled.a`
  font-family: ${theme.fonts.header};
  font-weight: 600;
  opacity: ${props => props.opacity};
  color: ${props => props.color};
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
`

function Link(props) {
  const button = props.button

  if (button) {
    return (
      <StyledLink as="button " {...props}>
        {props.children}
      </StyledLink>
    )
  }

  return <StyledLink {...props}>{props.children}</StyledLink>
}

Link.propTypes = {
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
  opacity: PropTypes.number,
}

Link.defaultProps = {
  button: false,
  color: 'black',
  opacity: 1,
}

export default Link
