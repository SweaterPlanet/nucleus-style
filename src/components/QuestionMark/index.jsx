import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../theme'

const Button = styled.button`
  width: 18px;
  height: 18px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${theme.colors.slate.base};

  ${props =>
    props.dark &&
    `
		background-color: ${theme.colors.paper.base};
	`}
`

const Text = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 10px;
  padding: 0;
  margin: 0;
  color: ${theme.colors.white};

  ${props =>
    props.dark &&
    `
		color: ${theme.colors.black};
	`}
`

function QuestionMark(props) {
  return (
    <Button dark={props.dark} {...props}>
      <Text dark={props.dark}>?</Text>
    </Button>
  )
}

export default QuestionMark
