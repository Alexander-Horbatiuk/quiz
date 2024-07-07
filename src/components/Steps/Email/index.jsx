import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../../Context';
import { useTranslation, Trans } from 'react-i18next';
import { ButtonToGo } from '../../Buttons/ButtonGoTo';
import {
    Wrapper,
    Title,
    SubTitle,
    Form,
    InputEmail,
    PrivacyPoliticStyle,
    LinkStyle
} from '../../../GlobalStyles';
import { styled } from 'styled-components';

export const Email = (borderColorValidate) => {
    const { nextStep, t } = useContext(AppContext);
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState();
    const [isTouched, setIsTouched] = useState(false);

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
            setEmail(storedEmail);
        }
    }, []);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setIsTouched(true);
        setIsValid(validateEmail(value));
    };

    const validateEmail = (email) => {
        const re = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/;
        return re.test(String(email).toLowerCase());
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (isValid) {
            localStorage.setItem('email', email);
        }
    };

    return (
        <Wrapper>
            <Title>{t('StepEmailTittle')}</Title>
            <SubTitle>{t('StepGenderSubTitle')}</SubTitle>

            <Form onSubmit={onSubmitForm}>
                <InputEmail
                    value={email}
                    onChange={handleInputChange}
                    onBlur={() => setIsTouched(true)}
                    borderColorValidate={
                        isTouched && !isValid ? '#D0006E' : 'initial'
                    }
                    placeholder={'Your email'}
                />
                {!isValid && isTouched && (
                    <p style={{ color: 'red' }}>Invalid email address</p>
                )}

                <PrivacyPoliticStyle>
                    <Trans
                        i18nKey="PrivacyPolitic"
                        components={{
                            privacyPolicyLink: (
                                <LinkStyle
                                    href="http://your-privacy-link.com"
                                    key="privacy-policy"
                                />
                            ),
                            termsOfUseLink: (
                                <LinkStyle
                                    href="http://your-terms-link.com"
                                    key="terms-of-use"
                                />
                            )
                        }}
                    />
                </PrivacyPoliticStyle>
                <ButtonToGo
                    type="submit"
                    disabled={!isValid}
                    onClick={nextStep}
                >
                    {t('ButtonNext')}
                </ButtonToGo>
            </Form>
        </Wrapper>
    );
};
