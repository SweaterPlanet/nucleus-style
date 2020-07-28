import styled from 'styled-components'
import Box from './Box'
import Heading30 from './Heading30'

const StyledAvatar = styled(Box)`
  border-radius: 50%;
  width: ${props => props.size};
  height: ${props => props.size};
  display: flex;
  align-items: center;
  justify-content: center;
`

const TextBox = styled(Box)`
  width: auto;
  height: auto;
  margin: 0 auto;
  position: relative;
`

function Avatar(props) {
  var { size, initials, color, ...props } = props

  return (
    <StyledAvatar {...props} width={size} height={size}>
      <TextBox width={size}>
        <Heading30 color={color}>{initials}</Heading30>
      </TextBox>
    </StyledAvatar>
  )
}

export default Avatar
