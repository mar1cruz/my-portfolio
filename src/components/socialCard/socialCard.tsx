import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {Text} from "../Text";

type PropsCardType = {
    iconId: string
    text: string
    link: string
}
export const SocialCard = (props: PropsCardType) => {
    return (
        <StyledCard>
            <a target='_blank' href={props.link}><Icon width='48' height='48' viewBox="0 0 48 48"
                                                                        iconId={props.iconId}></Icon></a>
            <a target='_blank' href={props.link}><Text>{props.text}</Text></a>
        </StyledCard>
    );
};

const StyledCard = styled.div`

a{
  color: var(--text, #BDEBEA);
  text-align: center;
  font-size: 12px;

  line-height: 11.105px;
  letter-spacing: 1.44px;
  text-transform: uppercase;
  &:visited{
    color: inherit;
  }
}
`