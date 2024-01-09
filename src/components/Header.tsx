import BoxContainer from "../styled/BoxContainer.styled";
import Link from "../styled/Link.styled";
import React from "react";
import styled from "styled-components";
import boxContainerStyled from "../styled/BoxContainer.styled";

export default function Header() {
    return (
        <HeaderWrapper>
            <BoxContainer as='nav' spaceBtw alignCenter header>
                <Link>Home</Link>
                <BtnWrapper gap='87px' alignCenter>
                    <Link>Projects</Link>
                    <Link gradient>Contact</Link>
                </BtnWrapper>
            </BoxContainer>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
  margin-bottom: 96px;
  
  @media (max-width: 991.98px){
    margin-bottom: 50px;
  }
`

const BtnWrapper = styled(BoxContainer)`
  @media (max-width: 575.98px) {
    gap: 31px;
    
  }
`