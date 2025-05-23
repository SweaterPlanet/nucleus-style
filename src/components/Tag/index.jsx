import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../theme'

export const StyledTag = styled.div`
  font-family: ${theme.fonts.header};
  font-weight: 600;
  display: inline-block;
  color: ${props => props.color};
  border: 0.2em solid ${props => props.color};
  border-radius: 2em;
  padding: 0.2em 0.6em;

  &:hover {
    text-decoration: none;
  }

  ${props =>
    props.button &&
    `
    background: none;
    cursor: pointer;
    text-decoration: none;
  `}

  ${props =>
    props.size === 'xs' &&
    `
    font-size: ${theme.fontSizes.p.xs};

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

function Tag(props) {
  const button = props.button

  if (button) {
    return (
      <StyledTag as="button" color={props.color} size={props.size} {...props}>
        {props.text}
      </StyledTag>
    )
  }
  return (
    <StyledTag color={props.color} size={props.size} {...props}>
      {props.text}
    </StyledTag>
  )
}

Tag.propTypes = {
  button: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  text: PropTypes.string,
}

Tag.defaultProps = {
  button: false,
  color: '#000000',
  size: 'xs',
}

export default Tag
