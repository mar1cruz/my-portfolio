import React from 'react';
import styled from "styled-components";
import FlexWrapper from "../../../../components/FlexWrapper";
import {Text} from "../../../../components/Text";
import {Button} from "../../../../components/Button";


type ProjectTypeProps = {
    card: {
        imageSrc: string
        title: string
        buttons: Array<String>
        text: string
    }
}

export const Project = (props: ProjectTypeProps) => {
    return (
        <StyledProject>
            <FlexWrapper direction='column'>
                <Image src={props.card.imageSrc} alt=""/>
                <ProjectBody direction='column'>
                    <ProjectTitle>{props.card.title}</ProjectTitle>
                    <Technology wrap='wrap'>
                        {props.card.buttons.map((item, index) => {
                            return (<Button gradient={true} key={index} text={`${item}`}/>)
                        })}
                    </Technology>
                    <Text>{props.card.text}</Text>
                </ProjectBody>
            </FlexWrapper>
        </StyledProject>
    );
};

const StyledProject = styled.div`
  max-width: 49%;
  width: 100%;
  border-radius: 6px;
  background: #222525;

  @media(max-width: 1199.98px){
    max-width: 520px;
  } 
  @media(max-width: 575.98px){
    max-width: 420px;
  }
`

const ProjectBody = styled(FlexWrapper)`
  padding: 29px 8px 31px 26px;
`

const ProjectTitle = styled.h3`
  color: #D9F2F2;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 11px;
`

const Technology = styled(FlexWrapper)`
  gap: 12px;
  margin-bottom: 20px;
`

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 388px;
`




