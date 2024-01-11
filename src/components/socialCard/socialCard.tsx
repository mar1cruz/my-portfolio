import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {Text} from "../Text";

type PropsCardType = {
    iconId: string
    text:string
}
export const SocialCard = (props: PropsCardType) => {
    return (
        <StyledCard>
            <Icon iconId={props.iconId}></Icon>
            <Text>{props.text}</Text>
        </StyledCard>
    );
};

const StyledCard = styled.div``