import styled from "styled-components";

type BoxPropType = {
    header?: boolean
    spaceBtw?: boolean
    alignCenter?: boolean
    dirColumn?: boolean
    gap?: string
}

const BoxContainer = styled.div<BoxPropType>`
  display: flex;
  justify-content: ${props => props.spaceBtw ? 'space-between' : 'flex-start'};
  gap: ${props => props.gap || 0};
  align-items: ${props => props.alignCenter ? 'center' : 'flex-start'};
  padding: ${props => props.header ? '28px 0px' : '0px'};
  flex-direction: ${props => props.dirColumn ? 'column' : 'row'};
  
`

export default BoxContainer