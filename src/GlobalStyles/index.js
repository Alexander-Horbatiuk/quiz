import { styled } from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    color: #fff;
`;

export const PrivacyPoliticStyle = styled.span`
    font-size: 15px;
`;

export const LinkStyle = styled.span`
    list-style: none;
    color: #eb2f9a;
`;

export const Title = styled.h2`
    font-size: 28px;
    line-height: 34px;
    margin: 0;
    color: #fff;
`;

export const SubTitle = styled.span`
    font-size: 17px;
    line-height: 24px;
    color: #c4c8cc;
`;

export const Form = styled.form`
    max-width: 335px;
    width: 100%;
`;

export const InputEmail = styled.input.attrs({ type: 'text' })`
    padding: 20px;
    box-sizing: border-box;
    border-radius: 16px;
    max-width: 335px;
    width: 100%;
    border: none;
    outline: none;
    border: 1px solid ${(props) => props.borderColorValidate};
    font-size: 17px;
    background: #36173d;
    color: #fff;
`;
