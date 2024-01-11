import React from 'react';
import styled from "styled-components";
import FlexWrapper from "../../../../../components/FlexWrapper";
import {Icon} from "../../../../../components/icon/Icon";

type SkillPropsType = {
    info:{
        iconId:string
        description:string
    }
}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill direction='column' align='center' >
            <Icon width='125' height='120' viewBox='0 0 116 120' iconId={props.info.iconId}/>
            <Description>{props.info.description}</Description>
        </StyledSkill>
    );
};

const StyledSkill = styled(FlexWrapper)`
 
`

const Description = styled(FlexWrapper)`
  text-align: center;
  font-size: 16px;
  letter-spacing: 2.166px;
  text-transform: uppercase;
`