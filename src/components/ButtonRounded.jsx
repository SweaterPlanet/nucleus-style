import styled from 'styled-components';

const ButtonRounded = styled.button`
  /* text */
  font-family: 'Helvetica Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
  font-size: 20px;
  font-weight: 500;

  /* button styles */
  border: none;
  border-radius: 20px;
  padding: 12px 38px;
  color: ${props => props.color};
  opacity: ${props => props.opacity || 1};
  background-color: ${props => props.bg};
  cursor: pointer;
`

export default ButtonRounded;