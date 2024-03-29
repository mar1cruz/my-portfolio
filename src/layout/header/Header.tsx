import FlexWrapper from "../../components/FlexWrapper";
import React from "react";
import styled from "styled-components";
import {Button} from "../../components/Button";
import {Container} from "../../components/Container";

export default function Header() {
    return (
        <HeaderWrapper>
            <Container>
                <FlexWrapper justify='space-between' align='center'>
                    <Button  text='Home'/>
                    <BtnWrapper align='center'>
                        <Button  text='Projects'/>
                        <Button padding='12px 20px' gradient='yes' text='Contact'/>
                    </BtnWrapper>
                </FlexWrapper>
            </Container>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
  padding: 27px 0px 187px 0px;

  @media(max-width: 991.98px){
    padding-bottom: 35px;
  }
`

const BtnWrapper = styled(FlexWrapper)`
  gap: 87px;

  @media (max-width: 575.98px) {
    gap: 35px;
  }
`