import styled from "styled-components";


type TextPropsType = {
    fontSize?: string
    lineheight?: string
    letterspace?: string
}

export const Text = styled.p<TextPropsType>`
  font-size: ${props => props.fontSize || '16px'};
  line-height: ${props => props.lineheight || '24px'};
  letter-spacing: ${props => props.letterspace || '0.64px'};
`
