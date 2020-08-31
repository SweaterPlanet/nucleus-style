import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../theme'

const Bar = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${theme.colors.paper.base};

  ${props =>
    props.dark &&
    `
		background-color: ${theme.colors.white};
	`}
`

const Meter = styled.div`
  width: ${props => props.value}%;
  height: 8px;
  
	${props =>
    props.color === 'aqua' &&
    `
      background-color: ${theme.colors.aqua.base};
    `}  

  ${props =>
    props.color === 'black' &&
    `
      background-color: ${theme.colors.black};
    `} 


  ${props =>
    props.color === 'blue' &&
    `
      background-color: ${theme.colors.blue.base};
    `}  

  ${props =>
    props.color === 'green' &&
    `
      background-color: ${theme.colors.green.base};
    `}

  ${props =>
    props.color === 'paper' &&
    `
      background-color: ${theme.colors.paper.base};
    `} 

  ${props =>
    props.color === 'purple' &&
    `
      background-color: ${theme.colors.purple.base};
    `}

  ${props =>
    props.color === 'red' &&
    `
      background-color: ${theme.colors.red.base};
    `} 

  ${props =>
    props.color === 'slate' &&
    `
      background-color: ${theme.colors.slate.base};
    `} 

  ${props =>
    props.color === 'white' &&
    `
      background-color: ${theme.colors.white};
    `} 
`

function ProgressBar(props) {
  return (
    <Bar>
      <Meter value="20" color="blue"></Meter>
    </Bar>
  )
}

export default ProgressBar
