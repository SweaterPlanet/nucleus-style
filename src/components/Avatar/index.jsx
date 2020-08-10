import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../theme'
import Box from '../Box'
import Text from '../Text'

const StyledAvatar = styled(Box)`
  border-radius: 50%;
  background-color: ${props => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${theme.fontSizes.h2.xs};
  height: ${theme.fontSizes.h2.xs};

  @media (min-width: ${theme.screens.sm}) {
    width: ${theme.fontSizes.h2.sm};
    height: ${theme.fontSizes.h2.sm};
  }

  @media (min-width: ${theme.screens.md}) {
    width: ${theme.fontSizes.h2.md};
    height: ${theme.fontSizes.h2.md};
  }

  @media (min-width: ${theme.screens.lg}) {
    width: ${theme.fontSizes.h2.lg};
    height: ${theme.fontSizes.h2.lg};
  }

  @media (min-width: ${theme.screens.xl}) {
    width: ${theme.fontSizes.h2.xl};
    height: ${theme.fontSizes.h2.xl};
  }
`

const TextBox = styled(Box)`
  width: auto;
  height: auto;
  margin: 0 auto;
  position: relative;
`

const StyledText = styled(Text)`
  color: ${props => props.color};
`

function Avatar(props) {
  return (
    <StyledAvatar bg={props.bg} {...props}>
      <TextBox>
        <StyledText color={props.color}>{props.initials}</StyledText>
      </TextBox>
    </StyledAvatar>
  )
}

Avatar.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string,
  initials: PropTypes.string,
}

Avatar.defaultProps = {
  bg: '#000000',
  color: '#ffffff',
}

export default Avatar
