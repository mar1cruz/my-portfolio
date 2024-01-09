import styled, {css} from "styled-components";

type LinkPropType ={
    gradient?:boolean
}

const Link = styled.a<LinkPropType>`
  color: #BDEBEA;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;

  ${props => props.gradient && css<LinkPropType>`
    color: #252728;
    padding: 12px 20px 13px 20px;
    border-radius: 6px;
    background: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
  `}
`

export default Link