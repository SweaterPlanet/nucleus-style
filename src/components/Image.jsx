import styled from 'styled-components'

const Image = styled.img.attrs(props => ({
  height: props.size,
  width: props.size,
  alt: props.alt,
}))

export default Image
