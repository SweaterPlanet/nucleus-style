import styled from 'styled-components'

const StyledHeading = styled.h1`
  font-family: 'Helvetica Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  opacity: ${props => props.opacity};
  color: ${props => props.color};
`

const Heading = ({ children, element, ...props }) => (
  <StyledHeading as={element} variant={element} {...props}>
    {children}
  </StyledHeading>
)

export default Heading

// https://reactjs.org/docs/jsx-in-depth.html#choosing-the-type-at-runtime
// https://stackoverflow.com/questions/29875869/react-jsx-dynamic-component-name
