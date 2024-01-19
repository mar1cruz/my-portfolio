import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import FlexWrapper from "../../../components/FlexWrapper";
import {Text} from "../../../components/Text";
import {Container} from "../../../components/Container";

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <Title>About me</Title>
                <AboutWrapper>
                    <Line/>
                    <AboutText fontSize='18px' letterspace='0.72px' lineheight='26px'>The long barrow was built on land
                        previously inhabited in the Mesolithic period. It consisted of a
                        sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a
                        chamber built from sarsen megaliths on its eastern end. Both inhumed and cremated human remains
                        were
                        placed within this chamber during the Neolithic period, representing at least nine or ten
                        individuals.</AboutText>
                </AboutWrapper>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    padding-bottom: 130px;
  
  @media(max-width: 991.98px){
    padding-bottom: 100px;
  }
`

const Line = styled.div`
  width: 5px;
  flex-shrink: 0;
  border-radius: 2px;
  background: var(--gradient, linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%));
  
`

const AboutWrapper = styled(FlexWrapper)`
  gap: 17px;
  height: 100%;
`

const Title = styled(SectionTitle)`
margin-bottom: 20px;
`

const AboutText = styled(Text)`
  max-width: 843px;
  
 @media (max-width: 767.98px){
   font-size: 16px;
 } 
`