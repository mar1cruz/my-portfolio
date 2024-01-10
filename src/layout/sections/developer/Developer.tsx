import React from "react";
import styled from "styled-components";

import FlexWrapper from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import {Icon} from "../../../components/icon/Icon";
export default function Developer() {
    return (
        <StyledDeveloper>
            <FlexWrapper justify='space-between' align='center'>
                <DeveloperBody direction='column' align='flex-start'>
                    <JobName>WEB DEVELOPER</JobName>
                    <Name>Dovidovich Dmitry</Name>
                    <Text>Greetings! My name is Dmitry and I am a web developer with a burning passion for creating amazing websites. My designs are not just code, they are unique visual and functional solutions that
                        inspire
                        and make an impact.</Text>
                    <Button text='Contact Me' gradient={true}></Button>
                </DeveloperBody>

                <Icon width='418' height='304' viewBox='"0 0 424 305"' iconId='mainLogo'/>
            </FlexWrapper>
            <FlexWrapper justify='center'><Icon width='32' height='32' viewBox='0 0 32 32' iconId='scroll'/></FlexWrapper>

        </StyledDeveloper>
    )
}

const StyledDeveloper = styled.section`
    min-height: 100vh;
`

const DeveloperBody = styled(FlexWrapper)`
    max-width: 514px;
`
const JobName = styled.h1`
`
const Name = styled.span`
`
const Text = styled.p`
    text-align: start;
`

