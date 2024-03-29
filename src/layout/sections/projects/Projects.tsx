import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import FlexWrapper from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import ProjectImg from '../../../assets/proj.png'
import {Container} from "../../../components/Container";

const cards = [
    {
        imageSrc: ProjectImg,
        title: 'TITLE PROJECT',
        buttons: ['Javascript', 'PostgreSQL', 'React', 'Redux'],
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
        imageSrc: ProjectImg,
        title: 'I N S I G H T G R A M',
        buttons: ['Javascript', 'React Native', 'Redux'],
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
        imageSrc: ProjectImg,
        title: 'TITLE PROJECT',
        buttons: ['Javascript', 'PostgreSQL', 'React', 'Redux'],
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
        imageSrc: ProjectImg,
        title: 'I N S I G H T G R A M',
        buttons: ['Javascript', 'React Native', 'Redux'],
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
]


export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <Title>Projects</Title>
                <CardWrapper wrap='wrap' justify='center'>
                    {cards.map((item, index) => {
                        return (
                            <Project key={index} card={item}/>
                        )
                    })}
                </CardWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
  padding-bottom: 140px;
  
  @media(max-width: 991.98px){
    padding-bottom: 100px;
  }
`
const CardWrapper = styled(FlexWrapper)`
  gap: 20px;
  
  @media(max-width: 1199.98px){
    align-items:stretch;
    gap: 40px;
  }
  
  @media(max-width: 991.98px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
`

const Title = styled(SectionTitle)`
  margin-bottom: 32px;
`

