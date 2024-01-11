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
                        <SocialCard iconId={'gmail'} text=''/>
                        <SocialCard iconId={'linkedin'} text=''/>
                        <SocialCard iconId={'github'} text=''/>
                    </SocialBody>
                    <FooterLinks>
                        <Link>Projects</Link>
                        <Link>Contact</Link>
                    </FooterLinks>
                    <Job>WEB DEVELOPER 2021</Job>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`

`

const SocialBody = styled(FlexWrapper)`

`

const FooterLinks = styled(FlexWrapper)`

`

const Job = styled.small`

`

const Link = styled.a`

`