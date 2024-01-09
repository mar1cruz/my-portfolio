import styled from "styled-components";

const Name = styled.h1`
  font-family: 'Montserrat',sans-serif;
  font-size: 72px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: var(--gradient, linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 11px;
  
  @media (max-width: 576px){
    font-size: 50px;
  }
`

export default Name