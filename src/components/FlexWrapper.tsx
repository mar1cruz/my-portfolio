import styled from "styled-components";

type BoxPropType = {
    justify?: string
    align?: string
    direction?: string
}

const FlexWrapper = styled.div<BoxPropType>`
  display: flex;
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  flex-direction: ${props => props.direction || 'row'};
`

export default FlexWrapper