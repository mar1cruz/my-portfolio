import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import FlexWrapper from "../../../components/FlexWrapper";
import {Skill} from "./skill/Skill/Skill";
import {Container} from "../../../components/Container";

const knowledge = [
    {
        iconId: 'html',
        viewBox:"0 0 94 106"
    },
    {
        iconId: 'css',
        viewBox:"0 0 94 106"
    },
    {
        iconId: 'saas',
        viewBox: '0 0 117 87'
    },
    {
        iconId: 'javascript',
    },
    {
        iconId: 'git',
    },
    {
        iconId: 'github',
        viewBox: '0 0 89 85'
    },
    {
        iconId: 'react',
        viewBox: '0 0 113 101'
    },
    {
        iconId: 'vsCode',
        viewBox: '0 0 100 100'

    },
    {
        iconId: 'styled',
        viewBox: '0 0 120 120'
    },
    {
        iconId: 'typeScript',
        viewBox: '0 0 120 120'
    },
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
    gap: 129px;
`
const Title = styled(SectionTitle)`
  margin-bottom: 28px;`