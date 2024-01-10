import FlexWrapper from "../../components/FlexWrapper";
import React from "react";
import styled from "styled-components";
import {Button} from "../../components/Button";

export default function Header() {
    return (
        <HeaderWrapper>
            <FlexWrapper justify='space-between' align='center' >
                <Button text='Home'/>
                <BtnWrapper align='center'>
                    <Button text='Projects'/>
                    <Button text='Contact'/>
                </BtnWrapper>
            </FlexWrapper>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
  margin-bottom: 96px;
  
`

const BtnWrapper = styled(FlexWrapper)`
  gap: 87px;
`