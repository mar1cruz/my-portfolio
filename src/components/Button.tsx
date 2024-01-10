import React from 'react';
import styled from "styled-components";

type ButtonPropsType = {
    text: string
    gradient?: boolean
}
export const Button = (props: ButtonPropsType) => {
    return (
        <StyledButton>{props.text}</StyledButton>
    );
};

const StyledButton = styled.a`

    
`