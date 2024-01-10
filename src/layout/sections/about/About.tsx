import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import FlexWrapper from "../../../components/FlexWrapper";
import {Text} from "../../../components/Text";

export const About = () => {
    return (
        <StyledAbout>
            <SectionTitle>About me</SectionTitle>
            <AboutWrapper>
                <Line/>
                <Text fontSize='18px' letterspace='0.72px' lineheight='26px'>The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a
                    sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a
                    chamber built from sarsen megaliths on its eastern end. Both inhumed and cremated human remains were
                    placed within this chamber during the Neolithic period, representing at least nine or ten
                    individuals.</Text>
            </AboutWrapper>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
  min-height: 100vh;
`

const Line = styled.div`
  width: 5px;
  height: 116px;
  flex-shrink: 0;
  border-radius: 2px;
  background: var(--gradient, linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%));
`
const AboutWrapper = styled(FlexWrapper)`
  max-height: 116px;
  height: 100%;
`