import React from 'react';
import styled from "styled-components";
import FlexWrapper from "../../../components/FlexWrapper";
import {Field} from "../../../components/field/Field";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";

const inputInfo = [
    {
        id: 'name',
        name: 'Name',
        type: 'text',
        placeholder: 'Name',
    },
    {
        id: 'email',
        name: 'Email',
        type: 'text',
        placeholder: 'Email',
    },
    {
        id: 'message',
        name: 'Message',
        type: 'textarea',
        placeholder: 'Hi, i will ...',
    },
]
export const Contacts = () => {
    return (
        <StyledContacts id='contacts'>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <FlexWrapper justify='center' align='center'>
                    <Form>
                        {inputInfo.map((item, index) => {
                            return (
                                <Field key={index} info={item}/>
                            )
                        })}

                        <Button fullWidth gradient={true} padding={'12px 20px'} as={'button'} text='Submit' type={'submit'}></Button>
                    </Form>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  margin-bottom: 190px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;

  max-width: 532px;
  width: 100%;
`

const ButtonSubmit = styled(Button)``

