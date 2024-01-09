import React from "react";
import styled from "styled-components";

import BoxContainer from "../styled/BoxContainer.styled";
import Link from "../styled/Link.styled";
import JobName from "../styled/JobName.styled";
import Name from "../styled/Name.styled";
import Text from "../styled/Text";

import {ReactComponent as Scroll} from "../assets/icons/scroll.svg"
// import {mainImage} from '../../public/image.png'
export default function Developer() {
    return (
        <BoxContainer as='section' spaceBtw alignCenter dirColumn>
            <MainBody alignCenter>
                <BoxContainer dirColumn>
                    <JobName>WEB DEVELOPER</JobName>
                    <Name>Dovidovich Dmitry</Name>
                    <Text>Greetings! My name is Dmitry and I am a web developer with a burning passion for creating
                        amazing
                        websites. My designs are not just code, they are unique visual and functional solutions that
                        inspire
                        and make an impact.</Text>
                    <Link gradient>Contact Me</Link>
                </BoxContainer>

                {/*<img src={mainImage} alt="main-image"/>*/}
            </MainBody>
            <Scroll/>
        </BoxContainer>
    )
}


// const StyledMainLogo = styled(MainLogo)`
//   @media (max-width: 576px) {
//     width: 280px;
//     height: 400px;
//   }
// `

const MainBody = styled(BoxContainer)`
  @media (max-width: 991.98px) {
    flex-direction: column;
  }`