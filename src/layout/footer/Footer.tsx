import React from 'react';
import styled from "styled-components";
import FlexWrapper from "../../components/FlexWrapper";
import {SocialCard} from "../../components/socialCard/socialCard";
import {Container} from "../../components/Container";


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify='center' align='center' direction='column'>
                    <SocialBody>
                        <SocialCard link='https://github.com/mar1cruz' iconId={'socialGithub'} text='GITHUB'/>
                        <SocialCard link='https://www.linkedin.com/in/дмитрий-довидович-166843286/' iconId={'socialLinkedin'} text='LINKEDIN'/>
                        <SocialCard link='https://t.me/mar1cruze' iconId={'socialTelegram'} text='TELEGRAM'/>
                    </SocialBody>
                    <FooterLinks>
                        <Link href='#contacts'>Projects</Link>
                        <Link href=''>Contact</Link>
                    </FooterLinks>
                    <Job>WEB DEVELOPER 2024</Job>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`

`

const SocialBody = styled(FlexWrapper)`
  gap: 73px;
  margin-bottom: 50px;
  
  @media (max-width: 575.98px) {
    gap: 20px;
    margin-bottom: 30px;
  }
`

const FooterLinks = styled(FlexWrapper)`
  gap: 48px;
  margin-bottom: 50px;

  @media (max-width: 575.98px) {
    margin-bottom: 30px;
  }
`

const Job = styled.small`
  margin-bottom: 100px;
`

const Link = styled.a`

`