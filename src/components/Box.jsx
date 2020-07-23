import styled from 'styled-components'

const Box = styled.div`
  /* color */
  color: ${props => props.color};
  background-color: ${props => props.bg};

  /* layout */
  display: ${props => props.display || props.d};
  width: ${props => props.width || props.w};
  height: ${props => props.height || props.h};
  min-width: ${props => props.minWidth};
  min-height: ${props => props.minHeight};
  max-width: ${props => props.maxWidth};
  max-height: ${props => props.maxHeight};
  overflow: ${props => props.overflow};
  overflow-x: ${props => props.overflowX};
  overflow-y: ${props => props.overflowY};

  /* space */
  margin: ${props => props.margin || props.m};
  margin-top: ${props => props.marginTop || props.mt};
  margin-right: ${props => props.marginRight || props.mr};
  margin-bottom: ${props => props.marginBottom || props.mb};
  margin-left: ${props => props.marginLeft || props.ml};
  padding: ${props => props.padding || props.p};
  padding-top: ${props => props.paddingTop || props.pt};
  padding-right: ${props => props.paddingRight || props.pr};
  padding-bottom: ${props => props.paddingBottom || props.pb};
  padding-left: ${props => props.paddingLeft || props.pl};
`

export default Box
