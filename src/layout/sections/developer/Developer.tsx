import React from "react";
import styled from "styled-components";

import FlexWrapper from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";
import flexWrapper from "../../../components/FlexWrapper";

export default function Developer() {
    return (
        <StyledDeveloper>
            <Container>
                <MainBody justify='space-between' align='center'>
                    <DeveloperBody direction='column' align='flex-start'>
                        <JobName>WEB DEVELOPER</JobName>
                        <Name>Dmitry</Name>
                        <Text>Greetings! My name is Dmitry and I am a web developer with a burning passion for creating
                            amazing websites. My designs are not just code, they are unique visual and functional
                            solutions that
                            inspire
                            and make an impact.</Text>
                        <Button padding={'12px 20px'} text='Contact Me' gradient='yes'></Button>
                    </DeveloperBody>

                    <Icon  width='418' height='304' viewBox="0 0 501 467" iconId='mainLogo'/>
                </MainBody>
                <IconWrapper justify='center'><Icon width='32' height='32' viewBox='0 0 32 32'
                                                    iconId='scroll'/></IconWrapper>
            </Container>
        </StyledDeveloper>
    )
}

const StyledDeveloper = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  margin-top: -257px;
  
  @media(max-width:991.98px){
    margin-top: -105px;
  }
  
  @media(max-height: 719px){
    min-height:100vh;
    align-items: flex-end;
  }
`

const MainBody = styled(FlexWrapper)`
  svg {
    @media (max-width: 991.98px) {
      width: 250px;
      height: 250px;
    }

    @media (max-width: 575.98px) {
      display: none;
      //width: 200px;
      //height: 200px;
    }
  }

  @media (max-width: 991.98px) {
    flex-direction: column;
    gap: 20px;
  }
`

const DeveloperBody = styled(FlexWrapper)`
  max-width: 514px;
`

const JobName = styled.h1`
  color: #D7E5EC;
  font-family: 'Tinos',sans-serif;
  font-size: 20px;
  margin-bottom: 10px;
`

const Name = styled.span`
  font-size: 72px;
  font-weight: 600;
  background: var(--gradient, linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 11px;
  
  @media (max-width: 575.98px){
    font-size: 40px;
  }
`

const Text = styled.p`
  text-align: start;
  color: var(--text, #BDEBEA);
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.64px;
  margin-bottom: 29px;
  
  @media(max-width: 991.98px){
    margin-bottom: 15px;
  }
  
  @media(max-width: 575.98px){
    & + a{
      padding: 8px 16px;
    }
  }
`

const IconWrapper = styled(FlexWrapper)`

  svg {
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    
    @media (max-height: 719px){
      display: none;
    }
  }


`
