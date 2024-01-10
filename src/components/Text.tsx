import styled from "styled-components";


type TextPropsType = {
    fontSize?: string
    lineheight?: string
    letterspace?: string
}

export const Text = styled.p<TextPropsType>`
  font-size:  ${props => '16px' || props.fontSize};
  font-weight: 400;
  line-height: ${props => '24px' || props.lineheight};
  letter-spacing: ${props => '0.64px' || props.letterspace};
`
