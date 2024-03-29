import React from 'react';
import styled, {css} from "styled-components";

type ButtonPropsType = {
    text: string
    as?: string
    gradient?: 'yes' | 'no'
    padding?: string
    type?: string
    fullWidth?: boolean
}


export const Button = (props: ButtonPropsType) => {

    return (
        <StyledButton padding={props.padding || '8px 16px'}
                      gradient={props.gradient}
                      as={props.as || 'a'}
                      width={props.fullWidth ? '100%' : ''}>
            {props.text}</StyledButton>
    );
};

type StyledButtonType = {
    gradient?: 'yes' | 'no'
    padding?: string
    width?: string

}

const StyledButton = styled.button<StyledButtonType>`
  width: initial;
  width: ${props => props.width || 'inherit'};
  cursor: pointer;
  color: var(--text, #BDEBEA);
  font-size: 16px;
  font-weight: 500;
  border: none;
  outline: none;


  ${props => props.gradient === 'yes' && css<StyledButtonType>`
    padding: ${props.padding};
    border-radius: 6px;
    background-image: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);

    color: #252728;
    text-align: center;

  }
  `
  }
`