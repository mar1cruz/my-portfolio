import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import FlexWrapper from "../../../components/FlexWrapper";
import {Skill} from "./skill/Skill/Skill";
import {Container} from "../../../components/Container";

const knowledge = [
    {
        iconId: 'javascript',
        description: 'JAVACRIPT',
    },
    {
        iconId: 'typeScript',
        description: 'typescript',
    },
    {
        iconId: 'react',
        description: 'react js',
    },
    {
        iconId: 'styled',
        description: 'Styled Components',
    },
    {
        iconId: 'git',
        description: 'git',
    }
]
export const Skills = () => {


    return (
        <StyledSkills>
            <Container>
                <Title>Skills</Title>
                <SkillsWrapper wrap='wrap' justify='space-between'>
                    {knowledge.map((item, index) => {
                        return (<Skill key={index} info={item}/>)
                    })}
                </SkillsWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  margin-bottom: 140px;
`

const SkillsWrapper = styled(FlexWrapper)`
`
const Title = styled(SectionTitle)`
margin-bottom: 28px;`