import React from 'react';
import styled from "styled-components";


type FieldPropsType = {
    info: {
        id: string
        name: string
        type: string
        placeholder: string
    }
}
export const Field = (props: FieldPropsType) => {
    return (
        <StyledInput htmlFor={props.info.id}>{props.info.name}
            {props.info.type === 'textarea' ?
                <TextareaStyled id={props.info.id} placeholder={props.info.placeholder}></TextareaStyled> :
                <InputStyled id={props.info.id} type={props.info.type}
                             placeholder={props.info.placeholder}></InputStyled>
            }

        </StyledInput>
    );
};

const StyledInput = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;

  color: #BDEBEA;
  font-size: 14px;
`

const InputStyled = styled.input`
  width: 100%;
  border-radius: 6px;
  border: 1px solid #BDEBEA;
  padding: 15px 0 15px 18px;
  background: transparent;
  color: #BDEBEA;
  font-size: 16px;

  &::placeholder {

    color: #BDEBEA;
    font-size: 16px;
    font-weight: 500;
  }

  &:focus {
    outline: none;
    border: 1px solid #00F5A0;
  }
`

const TextareaStyled = styled.textarea`
  max-width: 100%;
  min-width: 100%;
  width: 100%;
  min-height: 165px;
  border-radius: 6px;
  border: 1px solid #BDEBEA;
  padding: 15px;
  background: transparent;
  color: #BDEBEA;
  font-size: 16px;

  &::placeholder {

    color: #BDEBEA;
    font-size: 16px;
    font-weight: 500;
  }

  &:focus {
    outline: none;
    border: 1px solid #00F5A0;
  }
`
